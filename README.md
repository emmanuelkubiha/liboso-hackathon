# LIBOSO SERVICE

Prototype web professionnel moderne pour une startup africaine de services urbains intelligents.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Shadcn-style UI components
- Dark/Light theme
- FR/EN i18n (toggle côté client)

## Pages livrées

- `/` Home (hero, problème, solution, fonctionnement, impact, pays, partenaires, services, témoignages, FAQ, contact)
- `/about`
- `/services`
- `/transfrontaliere`
- `/impact`
- `/dashboard`
- `/booking`
- `/investor` (landing investisseur + section Seed Fund)
- `/api/mock` (faux backend simulé)

## Fonctionnalités clés

- Bilingue FR/EN
- Responsive mobile/tablette/desktop
- Design premium startup africaine
- Workflow réservation (choix service → tracking agent)
- Prototype dashboard admin (agents, réservations, qualité, paiements, analytics)
- Données mockées multi-pays / multi-paiement
- Vercel-ready

## Démarrage local

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Déploiement Vercel

1. Push sur GitHub
2. Importer le repo dans Vercel
3. Build command: `npm run build`
4. Output: `.next`

## Structure

- `src/app/*` : pages App Router
- `src/components/*` : composants réutilisables
- `src/components/ui/*` : composants UI style shadcn
- `src/lib/site-data.ts` : données mockées + contenus bilingues
- `src/app/api/mock/route.ts` : faux backend JSON
