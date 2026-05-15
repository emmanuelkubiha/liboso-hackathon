"use client";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export default function BookingPage() {
  const { t, locale } = useLanguage();
  const status = [
    locale === "fr" ? "Demande reçue" : "Request received",
    locale === "fr" ? "Agent en route" : "Agent on the way",
    locale === "fr" ? "Service terminé" : "Service completed",
    locale === "fr" ? "Évaluation client" : "Client rating",
  ];

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold">{t.booking.title}</h1>
      </Section>
      <Section>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {t.home.flow.map((step, idx) => (
            <Card key={step} className="p-4 text-center">
              <p className="text-xs text-orange-500">{idx + 1}</p>
              <CardDescription>{step}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <Card>
          <CardTitle>{locale === "fr" ? "Statut temps réel" : "Real-time status"}</CardTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {status.map((value) => (
              <Badge key={value}>{value}</Badge>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  );
}
