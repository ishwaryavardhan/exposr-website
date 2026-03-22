import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function PortalPage() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="min-h-screen bg-neutral-50 p-8 pt-32">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-4xl font-black mb-2 text-black uppercase tracking-tight">Leads Portal</h1>
                        <p className="text-black/50 font-medium">Manage and view your incoming inquiries.</p>
                    </div>
                    <div className="text-sm font-bold bg-white px-4 py-2 rounded-lg shadow-sm border border-black/5">
                        Total Leads: {leads.length}
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-50/50 border-b border-black/5 text-[10px] uppercase tracking-[0.2em] text-black/40">
                                <th className="p-6 font-black">Contact Info</th>
                                <th className="p-6 font-black">Service & Message</th>
                                <th className="p-6 font-black">Source / Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                            {leads.length === 0 ? (
                                <tr><td colSpan={3} className="p-12 text-center text-black/40 font-bold">No leads found yet.</td></tr>
                            ) : leads.map((lead: any) => (
                                <tr key={lead.id} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="p-6 align-top">
                                        <div className="font-black text-black text-lg">{lead.name || 'N/A'}</div>
                                        {lead.businessName && <div className="text-sm font-bold text-black/60">{lead.businessName}</div>}
                                        <div className="text-sm text-brand-orange font-bold mt-2">{lead.email}</div>
                                        <div className="text-sm text-black/40 font-medium">{lead.phone || '-'}</div>
                                    </td>
                                    <td className="p-6 align-top max-w-sm">
                                        <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                                            {lead.service || 'General Inquiry'}
                                        </span>
                                        <p className="text-sm text-black/70 font-medium leading-relaxed">{lead.message || '-'}</p>
                                    </td>
                                    <td className="p-6 align-top">
                                        <div className="mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-brand-orange/10 text-brand-orange rounded">
                                                {lead.source}
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
            </div>
        </div>
    );
}
