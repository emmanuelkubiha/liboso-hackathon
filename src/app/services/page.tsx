"use client";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { SERVICES } from "@/lib/site-data";

export default function ServicesPage() {
  const { t, locale } = useLanguage();

  return (
    <Section>
      <h1 className="text-4xl font-bold">{t.servicesPage.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{locale === "fr" ? "Réservation, prix simulés, agents disponibles et niveau de qualité." : "Booking, simulated prices, available agents and quality levels."}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service) => (
          <Card key={service.id}>
            <CardTitle>{service.name[locale]}</CardTitle>
            <CardDescription>{locale === "fr" ? "Durée" : "Duration"}: {service.duration}</CardDescription>
            <CardDescription>{locale === "fr" ? "Prix" : "Price"}: {service.price}</CardDescription>
            <CardDescription>{locale === "fr" ? "Agents" : "Agents"}: {service.agents}</CardDescription>
            <Badge className="mt-3">{service.quality}</Badge>
          </Card>
        ))}
      </div>
    </Section>
  );
}
