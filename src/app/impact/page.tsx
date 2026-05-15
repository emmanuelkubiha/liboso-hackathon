"use client";

import { Section } from "@/components/section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export default function ImpactPage() {
  const { t, locale } = useLanguage();
  const bars = [
    { name: locale === "fr" ? "Emplois créés" : "Jobs created", value: 78 },
    { name: locale === "fr" ? "Jeunes insérés" : "Youth inclusion", value: 64 },
    { name: locale === "fr" ? "Femmes autonomisées" : "Women empowered", value: 71 },
    { name: locale === "fr" ? "Risques sanitaires réduits" : "Health risks reduced", value: 59 },
  ];

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold">{t.impact.title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{t.impact.body}</p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-4">
          <Card><CardTitle>2,400+</CardTitle><CardDescription>{locale === "fr" ? "Emplois" : "Jobs"}</CardDescription></Card>
          <Card><CardTitle>1,200+</CardTitle><CardDescription>{locale === "fr" ? "Jeunes" : "Youth"}</CardDescription></Card>
          <Card><CardTitle>58%</CardTitle><CardDescription>{locale === "fr" ? "Femmes agents" : "Women agents"}</CardDescription></Card>
          <Card><CardTitle>35%</CardTitle><CardDescription>{locale === "fr" ? "Amélioration hygiène" : "Hygiene improvement"}</CardDescription></Card>
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{locale === "fr" ? "Graphiques" : "Charts"}</h2>
        <Card>
          <div className="space-y-4">
            {bars.map((bar) => (
              <div key={bar.name}>
                <div className="mb-1 flex justify-between text-sm"><span>{bar.name}</span><span>{bar.value}%</span></div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${bar.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  );
}
