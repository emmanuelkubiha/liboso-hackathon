"use client";

import { ArrowRightLeft } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { COUNTRIES } from "@/lib/site-data";
import { useLanguage } from "@/components/language-provider";

export default function CrossBorderPage() {
  const { t, locale } = useLanguage();

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold">{t.cross.title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{t.cross.body}</p>
      </Section>
      <Section>
        <Card className="bg-gradient-to-r from-[#0D1B3D] to-[#0D9488] text-white">
          <CardTitle>{locale === "fr" ? "Carte d'Afrique animée (prototype)" : "Animated Africa map (prototype)"}</CardTitle>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            {COUNTRIES.map((country) => (
              <div key={country} className="rounded-xl bg-white/10 p-3 text-center text-sm">
                <ArrowRightLeft size={16} className="mx-auto mb-2" />
                {country}
              </div>
            ))}
          </div>
        </Card>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          <Card><CardTitle>Rwanda</CardTitle><CardDescription>{locale === "fr" ? "Hub stratégique, innovation et orchestration régionale." : "Strategic hub for innovation and regional orchestration."}</CardDescription></Card>
          <Card><CardTitle>RDC</CardTitle><CardDescription>{locale === "fr" ? "Marché principal, forte demande urbaine et potentiel d'impact massif." : "Main market with major urban demand and impact potential."}</CardDescription></Card>
          <Card><CardTitle>Kenya · Tanzanie · Ouganda</CardTitle><CardDescription>{locale === "fr" ? "Partenaires régionaux, collaboration et mobilité des services." : "Regional partners for collaboration and service mobility."}</CardDescription></Card>
        </div>
      </Section>
    </div>
  );
}
