"use client";

import { Section } from "@/components/section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold">{t.about.title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{t.about.body}</p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Card><CardTitle>{locale === "fr" ? "Économie informelle" : "Informal economy"}</CardTitle><CardDescription>{locale === "fr" ? "La majorité des travailleurs urbains opèrent sans structure ni protection sociale." : "Most urban workers operate without structure and social protection."}</CardDescription></Card>
          <Card><CardTitle>{locale === "fr" ? "Urbanisation" : "Urbanization"}</CardTitle><CardDescription>{locale === "fr" ? "Croissance urbaine accélérée et besoin de standards de qualité." : "Fast urban growth and need for quality standards."}</CardDescription></Card>
          <Card><CardTitle>{locale === "fr" ? "Inclusion femmes et jeunes" : "Women & youth inclusion"}</CardTitle><CardDescription>{locale === "fr" ? "Formation, emploi et montée en compétences des agents." : "Training, jobs and skills progression for agents."}</CardDescription></Card>
          <Card><CardTitle>{locale === "fr" ? "Innovation digitale africaine" : "African digital innovation"}</CardTitle><CardDescription>{locale === "fr" ? "Technologie humaine au service d'un business physique." : "Human-centered technology serving physical operations."}</CardDescription></Card>
        </div>
      </Section>
    </div>
  );
}
