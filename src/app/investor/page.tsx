"use client";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export default function InvestorPage() {
  const { t, locale } = useLanguage();

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold">{t.investor.title}</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{locale === "fr" ? "Prototype prêt pour investisseurs, incubateurs et décideurs publics." : "Investor-ready prototype for incubators and public decision makers."}</p>
      </Section>
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card><CardTitle>{locale === "fr" ? "Traction" : "Traction"}</CardTitle><CardDescription>12,800+ bookings/month, 5 countries pipeline.</CardDescription></Card>
          <Card><CardTitle>{locale === "fr" ? "Business Model" : "Business Model"}</CardTitle><CardDescription>Commission, B2B contracts, quality subscription.</CardDescription></Card>
          <Card><CardTitle>{locale === "fr" ? "Vision 2030" : "Vision 2030"}</CardTitle><CardDescription>Cross-border network for African smart urban services.</CardDescription></Card>
        </div>
      </Section>
      <Section>
        <Card className="bg-gradient-to-r from-orange-500 to-emerald-500 text-white">
          <Badge className="bg-white/20 text-white">Seed Fund</Badge>
          <CardTitle className="mt-3">$500K Seed Round</CardTitle>
          <CardDescription className="text-slate-100">{locale === "fr" ? "Objectif: scaling régional, formation d'agents, infrastructure data, conformité financière." : "Goal: regional scaling, agent training, data infrastructure, and compliance."}</CardDescription>
        </Card>
      </Section>
    </div>
  );
}
