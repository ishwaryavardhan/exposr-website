import prisma from "@/lib/prisma";
import PortalClient from "./PortalClient";

export const dynamic = 'force-dynamic';

export default async function PortalPage() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="min-h-screen bg-neutral-50 p-4 md:p-8 pt-24 md:pt-32">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black mb-2 mt-10 text-black uppercase tracking-tight">Leads Portal</h1>
                        <p className="text-black/50 font-medium">Manage and view your incoming inquiries.</p>
                    </div>
                    <div className="text-sm font-bold bg-white px-4 py-2 rounded-lg shadow-sm border border-black/5 whitespace-nowrap">
                        Total Leads: {leads.length}
                    </div>
                </div>

                <PortalClient leads={leads} />
            </div>
        </div>
    );
}
