"use client";

import Link from "next/link";
import { Building2, CircleDollarSign, MapPinned, Sparkles, Users } from "lucide-react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { COUNTRIES, PAYMENTS, SERVICES, TEAM } from "@/lib/site-data";

export default function Home() {
  const { t, locale } = useLanguage();

  return (
    <div className="pb-10">
      <Section className="pt-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <Badge>Startup africaine premium</Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">{t.home.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{t.home.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking"><Button size="lg">{t.common.cta}</Button></Link>
              <Link href="/dashboard"><Button variant="outline" size="lg">{t.common.cta2}</Button></Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {t.home.stats.map((stat) => (
                <Card key={stat.label} className="p-4">
                  <p className="text-2xl font-bold text-[#0D1B3D] dark:text-emerald-300">{stat.value}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
          <Card className="relative overflow-hidden bg-gradient-to-br from-[#0D1B3D] via-[#1E3A8A] to-[#0D9488] text-white">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-orange-200">Urban Intelligence</p>
              <h2 className="text-2xl font-semibold">{locale === "fr" ? "Organiser le terrain, sécuriser la confiance" : "Organize operations, secure trust"}</h2>
              <p className="text-sm text-slate-100">{locale === "fr" ? "Le digital structure les services physiques: nettoyage, car wash, déchets, ménage et services urbains." : "Digital organizes physical services: cleaning, car wash, waste, housekeeping and urban operations."}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-white/10 p-3">{locale === "fr" ? "Suivi agent temps réel" : "Real-time agent tracking"}</div>
                <div className="rounded-xl bg-white/10 p-3">{locale === "fr" ? "Paiement mobile" : "Mobile money ready"}</div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card><CardTitle>{locale === "fr" ? "Problème" : "Problem"}</CardTitle><CardDescription>{t.home.problem}</CardDescription></Card>
          <Card><CardTitle>{locale === "fr" ? "Solution" : "Solution"}</CardTitle><CardDescription>{t.home.solution}</CardDescription></Card>
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{locale === "fr" ? "Fonctionnement" : "How it works"}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {t.home.flow.map((step, idx) => (
            <Card key={step} className="p-4">
              <p className="text-sm text-orange-500">0{idx + 1}</p>
              <CardTitle className="text-lg">{step}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{locale === "fr" ? "Services" : "Services"}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <Card key={service.id} className="p-4"><CardTitle className="text-base">{service.name[locale]}</CardTitle><CardDescription>{service.price} · {service.duration}</CardDescription></Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{t.common.countries}</h2>
        <div className="grid gap-3 md:grid-cols-5">
          {COUNTRIES.map((country) => (
            <Card key={country} className="p-4 text-center"><MapPinned className="mx-auto mb-2" size={18} /><p>{country}</p></Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{locale === "fr" ? "Paiement mobile comme moteur de confiance en Afrique" : "Mobile payment as trust engine in Africa"}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PAYMENTS.map((payment) => (
            <Card key={payment} className="p-4"><CircleDollarSign size={18} /><CardTitle className="mt-2 text-base">{payment}</CardTitle></Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{t.common.innovation}</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {["Chatbot support", "Suggestions automatiques", "Optimisation tournées agents", "Matching intelligent clients/agents"].map((ia) => (
            <Card key={ia} className="p-4"><Sparkles size={18} /><CardDescription className="mt-2">{ia}</CardDescription></Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card>
            <CardTitle>{locale === "fr" ? "Impact" : "Impact"}</CardTitle>
            <CardDescription>{locale === "fr" ? "Création d'emplois, insertion des jeunes, autonomisation des femmes et formalisation économique." : "Job creation, youth inclusion, women empowerment and economic formalization."}</CardDescription>
          </Card>
          <Card>
            <CardTitle>{locale === "fr" ? "Partenaires" : "Partners"}</CardTitle>
            <CardDescription>Uber · Glovo · SweepSouth · Airbnb Services · Notion · Stripe</CardDescription>
          </Card>
          <Card>
            <CardTitle>{locale === "fr" ? "Équipe" : "Team"}</CardTitle>
            <CardDescription>{TEAM.join(" · ")}</CardDescription>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{locale === "fr" ? "Témoignages" : "Testimonials"}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {t.home.testimonials.map((line) => (
            <Card key={line} className="p-4"><Users size={18} /><CardDescription className="mt-2">“{line}”</CardDescription></Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {t.home.faq.map((item) => (
            <Card key={item.q} className="p-4"><CardTitle className="text-base">{item.q}</CardTitle><CardDescription>{item.a}</CardDescription></Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">{locale === "fr" ? "Mockups" : "Mockups"}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <Card className="p-4"><Building2 size={18} /><CardTitle className="mt-2 text-base">Mobile</CardTitle><div className="mt-3 h-28 rounded-xl border border-dashed border-slate-300 dark:border-slate-700" /></Card>
          <Card className="p-4"><Building2 size={18} /><CardTitle className="mt-2 text-base">Tablet</CardTitle><div className="mt-3 h-28 rounded-xl border border-dashed border-slate-300 dark:border-slate-700" /></Card>
          <Card className="p-4"><Building2 size={18} /><CardTitle className="mt-2 text-base">Desktop</CardTitle><div className="mt-3 h-28 rounded-xl border border-dashed border-slate-300 dark:border-slate-700" /></Card>
        </div>
      </Section>

      <Section>
        <Card className="bg-gradient-to-r from-[#0D1B3D] to-[#0D9488] text-white">
          <CardTitle>{locale === "fr" ? "Contact & Pitch" : "Contact & Pitch"}</CardTitle>
          <CardDescription className="text-slate-100">invest@liboso.africa · +250 700 000 000 · Kigali & Kinshasa</CardDescription>
        </Card>
      </Section>
    </div>
  );
}
