import prisma from "@/lib/prisma";
import PortalClientPage from "./PortalClientPage";

export const dynamic = 'force-dynamic';

export default async function PortalPage() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' }
    });

    // Serialize dates to strings for client component
    const serialized = leads.map((l: any) => ({
        ...l,
        createdAt: l.createdAt.toISOString(),
    }));

    return <PortalClientPage leads={serialized} />;
}
