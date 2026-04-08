"use client";

import { useState } from 'react';
import { Globe, Flag } from 'lucide-react';

type Lead = {
    id: string;
    name: string | null;
    businessName: string | null;
    email: string;
    phone: string | null;
    service: string | null;
    message: string | null;
    source: string | null;
    country: string | null;
    createdAt: string;
};

const TABS = [
    { key: 'all',   label: 'All Leads',  flag: '🌐' },
    { key: 'US',    label: 'United States', flag: '🇺🇸' },
    { key: 'IN',    label: 'India',      flag: '🇮🇳' },
    { key: 'other', label: 'Others',     flag: '🌍' },
];

function getCountryBucket(lead: Lead): string {
    const source = (lead.source || '').toLowerCase();
    const country = (lead.country || '').toLowerCase();
    if (country === 'us' || source.includes('us ')) return 'US';
    if (
        country === 'in' ||
        source.includes('chennai') ||
        source.includes('bangalore') ||
        source.includes('india')
    ) return 'IN';
    return 'other';
}

function LeadRow({ lead }: { lead: Lead }) {
    const bucket = getCountryBucket(lead);
    const flagMap: Record<string, string> = { US: '🇺🇸', IN: '🇮🇳', other: '🌍' };

    return (
        <tr className="hover:bg-neutral-50/60 transition-colors group">
            <td className="p-6 align-top">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{flagMap[bucket]}</span>
                    <div className="font-black text-black text-base">{lead.name || 'N/A'}</div>
                </div>
                {lead.businessName && (
                    <div className="text-sm font-bold text-black/50 mb-1">{lead.businessName}</div>
                )}
                <div className="text-sm text-brand-orange font-bold">{lead.email}</div>
                <div className="text-sm text-black/40 font-medium mt-0.5">{lead.phone || '—'}</div>
            </td>
            <td className="p-6 align-top max-w-xs">
                <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
                    {lead.service || 'General Inquiry'}
                </span>
                <p className="text-sm text-black/60 font-medium leading-relaxed line-clamp-3">{lead.message || '—'}</p>
            </td>
            <td className="p-6 align-top">
                <div className="mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-brand-orange/10 text-brand-orange rounded">
                        {lead.source || '—'}
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
    );
}

export default function PortalClientPage({ leads }: { leads: Lead[] }) {
    const [activeTab, setActiveTab] = useState('all');

    const filtered = activeTab === 'all'
        ? leads
        : leads.filter(l => getCountryBucket(l) === activeTab);

    const countFor = (key: string) =>
        key === 'all' ? leads.length : leads.filter(l => getCountryBucket(l) === key).length;

    return (
        <div className="min-h-screen bg-neutral-50 p-6 pt-32">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl font-black text-black uppercase tracking-tight mb-1">Leads Portal</h1>
                        <p className="text-black/40 font-medium">All incoming inquiries organised by market.</p>
                    </div>
                    <div className="text-sm font-black bg-white px-5 py-2.5 rounded-xl shadow-sm border border-black/5 text-black/60">
                        Total: <span className="text-black">{leads.length}</span> leads
                    </div>
                </div>

                {/* Country Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {TABS.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-200 border ${activeTab === tab.key
                                ? 'bg-black text-white border-black shadow-lg'
                                : 'bg-white text-black/50 border-black/5 hover:border-black/20 hover:text-black'
                                }`}
                        >
                            <span className="text-base">{tab.flag}</span>
                            {tab.label}
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${activeTab === tab.key ? 'bg-white/20 text-white' : 'bg-neutral-100 text-black/40'}`}>
                                {countFor(tab.key)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-50/80 border-b border-black/5 text-[10px] uppercase tracking-[0.2em] text-black/40">
                                <th className="p-6 font-black">Contact Info</th>
                                <th className="p-6 font-black">Service &amp; Message</th>
                                <th className="p-6 font-black">Source / Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="p-16 text-center text-black/30 font-bold">
                                        <Globe size={40} className="mx-auto mb-4 opacity-20" />
                                        No leads in this segment yet.
                                    </td>
                                </tr>
                            ) : filtered.map(lead => (
                                <LeadRow key={lead.id} lead={lead} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
