import { NextResponse } from "next/server";
import { COUNTRIES, PAYMENTS, SERVICES } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({
    mission: "Formaliser les services urbains africains grâce au digital.",
    countries: COUNTRIES,
    payments: PAYMENTS,
    services: SERVICES,
    stats: {
      bookingsMonthly: 12800,
      activeAgents: 540,
      qualityScore: 94,
    },
  });
}
