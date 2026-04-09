'use client';

import React, { useState, useMemo } from 'react';
import { Search, Download, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PortalClient({ leads }: { leads: any[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [serviceFilter, setServiceFilter] = useState('All');
    const [sourceFilter, setSourceFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const uniqueServices = useMemo(() => {
        const services = new Set(leads.map(l => l.service || 'General Inquiry'));
        return ['All', ...Array.from(services)];
    }, [leads]);

    const uniqueSources = useMemo(() => {
        const sources = new Set(leads.map(l => l.source || 'N/A'));
        return ['All', ...Array.from(sources)];
    }, [leads]);

    const filteredLeads = useMemo(() => {
        return leads.filter(lead => {
            const matchesSearch = 
                (lead.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                (lead.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                (lead.phone || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                (lead.businessName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                (lead.message || '').toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesService = serviceFilter === 'All' || (lead.service || 'General Inquiry') === serviceFilter;
            const matchesSource = sourceFilter === 'All' || (lead.source || 'N/A') === sourceFilter;

            return matchesSearch && matchesService && matchesSource;
        });
    }, [leads, searchQuery, serviceFilter, sourceFilter]);

    const totalPages = Math.max(1, Math.ceil(filteredLeads.length / itemsPerPage));
    const currentLeads = filteredLeads.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(1);
    }

    const exportToCsv = () => {
        const headers = ['Name', 'Email', 'Phone', 'Business Name', 'Service', 'Source', 'Message', 'Date'];
        const csvRows = [headers.join(',')];

        filteredLeads.forEach(lead => {
            const row = [
                `"${lead.name || 'N/A'}"`,
                `"${lead.email || ''}"`,
                `"${lead.phone || ''}"`,
                `"${lead.businessName || ''}"`,
                `"${lead.service || 'General Inquiry'}"`,
                `"${lead.source || ''}"`,
                `"${(lead.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                `"${new Date(lead.createdAt).toLocaleDateString()}"`
            ];
            csvRows.push(row.join(','));
        });

        const csvContent = "\uFEFF" + csvRows.join('\n'); // Add BOM for Excel UTF-8
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'leads_export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-6">
            {/* Filters & Export */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
                    <div className="relative w-full md:max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 w-4 h-4" />
                        <input 
                            type="text" 
                            placeholder="Search leads..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-black/10 rounded-lg text-sm font-medium focus:outline-none focus:border-brand-orange transition-colors"
                        />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <select 
                            value={serviceFilter}
                            onChange={(e) => setServiceFilter(e.target.value)}
                            className="flex-1 md:w-40 px-3 py-2 bg-neutral-50 border border-black/10 rounded-lg text-sm font-medium focus:outline-none focus:border-brand-orange transition-colors"
                        >
                            {uniqueServices.map(s => <option key={s as string} value={s as string}>{s as string}</option>)}
                        </select>
                        <select 
                            value={sourceFilter}
                            onChange={(e) => setSourceFilter(e.target.value)}
                            className="flex-1 md:w-40 px-3 py-2 bg-neutral-50 border border-black/10 rounded-lg text-sm font-medium focus:outline-none focus:border-brand-orange transition-colors"
                        >
                            {uniqueSources.map(s => <option key={s as string} value={s as string}>{s as string}</option>)}
                        </select>
                    </div>
                </div>
                
                <button 
                    onClick={exportToCsv}
                    className="flex justify-center items-center gap-2 w-full md:w-auto px-6 py-2 bg-brand-orange text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                >
                    <Download className="w-4 h-4" />
                    Export Excel
                </button>
            </div>

            {/* Table & Mobile Cards */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 overflow-hidden">
                {/* Desktop Table View */}
                <div className="overflow-x-auto hidden lg:block">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-neutral-50/50 border-b border-black/5 text-[10px] uppercase tracking-[0.2em] text-black/40">
                                <th className="p-6 font-black whitespace-nowrap">Contact Info</th>
                                <th className="p-6 font-black whitespace-nowrap">Service & Message</th>
                                <th className="p-6 font-black whitespace-nowrap">Source / Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                            {currentLeads.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="p-12 text-center text-black/40 font-bold">
                                        No leads found matching your criteria.
                                    </td>
                                </tr>
                            ) : currentLeads.map((lead: any) => (
                                <tr key={lead.id} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="p-6 align-top">
                                        <div className="font-black text-black text-lg">{lead.name || 'N/A'}</div>
                                        {lead.businessName && <div className="text-sm font-bold text-black/60">{lead.businessName}</div>}
                                        <div className="text-sm text-brand-orange font-bold mt-2 break-all">{lead.email}</div>
                                        <div className="text-sm text-black/40 font-medium">{lead.phone || '-'}</div>
                                    </td>
                                    <td className="p-6 align-top max-w-sm xl:max-w-md">
                                        <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3 whitespace-nowrap">
                                            {lead.service || 'General Inquiry'}
                                        </span>
                                        <p className="text-sm text-black/70 font-medium leading-relaxed break-words line-clamp-3 hover:line-clamp-none transition-all">
                                            {lead.message || '-'}
                                        </p>
                                    </td>
                                    <td className="p-6 align-top whitespace-nowrap">
                                        <div className="mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-brand-orange/10 text-brand-orange rounded">
                                                {lead.source || 'N/A'}
                                            </span>
                                        </div>
                                        <div className="text-xs text-black/40 font-bold">
                                            {new Date(lead.createdAt).toLocaleDateString(undefined, {
                                                year: 'numeric', month: 'short', day: 'numeric',
                                                hour: '2-digit', minute: '2-digit'
                                            })}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards View */}
                <div className="flex flex-col lg:hidden divide-y divide-black/5">
                    {currentLeads.length === 0 ? (
                        <div className="p-12 text-center text-black/40 font-bold">
                            No leads found matching your criteria.
                        </div>
                    ) : currentLeads.map((lead: any) => (
                        <div key={lead.id} className="p-5 sm:p-6 space-y-4 hover:bg-neutral-50/50 transition-colors">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <div className="font-black text-black text-xl leading-tight">{lead.name || 'N/A'}</div>
                                    {lead.businessName && <div className="text-sm font-bold text-black/60 mt-1">{lead.businessName}</div>}
                                </div>
                                <span className="text-[10px] uppercase tracking-widest bg-brand-orange/10 text-brand-orange px-2 py-1 rounded font-black flex-shrink-0 mt-1">
                                    {lead.source || 'N/A'}
                                </span>
                            </div>

                            <div className="bg-neutral-50 rounded-2xl p-4 border border-black/5 space-y-3">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                        {lead.service || 'General Inquiry'}
                                    </span>
                                </div>
                                <p className="text-sm text-black/70 font-medium leading-relaxed break-words">
                                    {lead.message || '-'}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                                <div>
                                    <a href={`mailto:${lead.email}`} className="text-sm text-brand-orange font-bold break-all block">{lead.email}</a>
                                    <div className="text-sm text-black/40 font-medium mt-0.5">{lead.phone || '-'}</div>
                                </div>
                                <div className="text-xs text-black/40 font-bold bg-neutral-50 px-3 py-1.5 rounded-lg border border-black/5 whitespace-nowrap">
                                    {new Date(lead.createdAt).toLocaleDateString(undefined, {
                                        year: 'numeric', month: 'short', day: 'numeric',
                                        hour: '2-digit', minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {(totalPages > 1 || filteredLeads.length > 0) && (
                    <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-black/5 bg-neutral-50/30 gap-4">
                        <div className="text-sm text-black/50 font-bold">
                            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredLeads.length)} of {filteredLeads.length} entries
                        </div>
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => setCurrentPage(max => Math.max(1, max - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg hover:bg-black/5 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-black/60" />
                            </button>
                            <div className="flex gap-1 overflow-x-auto max-w-[200px] sm:max-w-none">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`min-w-[32px] h-8 rounded-lg text-sm font-bold transition-colors ${
                                            currentPage === i + 1 
                                                ? 'bg-brand-orange text-white' 
                                                : 'text-black/60 hover:bg-black/5'
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <button 
                                onClick={() => setCurrentPage(min => Math.min(totalPages, min + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg hover:bg-black/5 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-black/60" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
