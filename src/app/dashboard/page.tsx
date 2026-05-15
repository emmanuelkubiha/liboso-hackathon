"use client";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export default function DashboardPage() {
  const { t, locale } = useLanguage();

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold">{t.dashboard.title}</h1>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-4">
          <Card><CardTitle>$86,000</CardTitle><CardDescription>{locale === "fr" ? "Revenus" : "Revenue"}</CardDescription></Card>
          <Card><CardTitle>5</CardTitle><CardDescription>{locale === "fr" ? "Pays actifs" : "Active countries"}</CardDescription></Card>
          <Card><CardTitle>Car Wash</CardTitle><CardDescription>{locale === "fr" ? "Service populaire" : "Top service"}</CardDescription></Card>
          <Card><CardTitle>94%</CardTitle><CardDescription>{locale === "fr" ? "Score qualité" : "Quality score"}</CardDescription></Card>
        </div>
      </Section>
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardTitle>{locale === "fr" ? "Gestion agents" : "Agent management"}</CardTitle>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• {locale === "fr" ? "Ajouter agent" : "Add agent"}</li>
              <li>• {locale === "fr" ? "Vérifier identité" : "Verify identity"}</li>
              <li>• {locale === "fr" ? "Performances & notation" : "Performance & rating"}</li>
              <li>• {locale === "fr" ? "Disponibilité" : "Availability"}</li>
            </ul>
          </Card>
          <Card>
            <CardTitle>{locale === "fr" ? "Gestion réservations" : "Booking management"}</CardTitle>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• {locale === "fr" ? "Clients" : "Clients"}</li>
              <li>• {locale === "fr" ? "Services" : "Services"}</li>
              <li>• {locale === "fr" ? "Paiements" : "Payments"}</li>
              <li>• {locale === "fr" ? "Statuts" : "Status"}</li>
            </ul>
          </Card>
          <Card>
            <CardTitle>{locale === "fr" ? "Suivi qualité" : "Quality monitoring"}</CardTitle>
            <CardDescription>{locale === "fr" ? "Avis clients, score qualité, incidents." : "Customer feedback, quality score, incidents."}</CardDescription>
            <Badge className="mt-4">{locale === "fr" ? "Conforme" : "Compliant"}</Badge>
          </Card>
          <Card>
            <CardTitle>{locale === "fr" ? "Paiements" : "Payments"}</CardTitle>
            <CardDescription>Mobile Money · Visa · POS</CardDescription>
          </Card>
        </div>
      </Section>
    </div>
  );
}
