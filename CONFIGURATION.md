# 📝 Liste de Configuration Post-Installation

## ✅ À Faire Immédiatement

### 1. Personnalisation des Informations

**Date et Lieu du Mariage**
- [ ] Modifier la date dans `src/app/page.tsx` (ligne ~8)
  ```tsx
  const weddingDate = '2026-08-15T16:00:00'; // ← Changer ici
  ```
- [ ] Mettre à jour le lieu dans `src/app/page.tsx` (ligne ~35)
- [ ] Adapter le programme dans `src/app/le-grand-jour/page.tsx`

**Photos**
- [ ] Remplacer `public/Couple.jpeg` par votre vraie photo
- [ ] Ajouter plus de photos dans `public/` pour la galerie
- [ ] Optimiser les images (WebP, compression)

**Timeline Notre Histoire**
- [ ] Personnaliser les dates dans `src/app/notre-histoire/page.tsx`
- [ ] Adapter les descriptions des événements
- [ ] Ajouter vos propres photos de couple

### 2. Configuration Google Maps

**Carte Interactive**
- [ ] Obtenir une clé API Google Maps
- [ ] Remplacer l'URL de l'iframe dans `src/app/le-grand-jour/page.tsx` (ligne ~73)
- [ ] Tester que la carte s'affiche correctement

**Adresse du Lieu**
- [ ] Mettre à jour l'adresse complète (ligne ~83)
- [ ] Vérifier le lien "Obtenir l'itinéraire"

### 3. Informations de Contact

**Coordonnées des Mariés**
- [ ] Modifier emails dans `src/app/contact/page.tsx`
- [ ] Mettre à jour les numéros de téléphone
- [ ] Ajouter les vrais noms et rôles des témoins

**Footer**
- [ ] Ajouter les vrais liens réseaux sociaux dans `src/components/Footer.tsx`

### 4. Liste de Cadeaux

**Liens Externes**
- [ ] Créer une cagnotte (Leetchi, PayPal, etc.)
- [ ] Mettre à jour le lien dans `src/app/cadeaux/page.tsx` (ligne ~79)
- [ ] Ajouter les vrais liens vers les listes en magasin (ligne ~92)

### 5. Musique de Fond

- [ ] Choisir une musique appropriée
- [ ] Convertir en MP3 (128-192 kbps)
- [ ] Placer dans `public/music/background-music.mp3`
- [ ] Tester le lecteur de musique

---

## 🔧 Configuration Technique

### Backend RSVP (Recommandé pour Production)

**Option 1 : API Route Next.js**
```bash
# Créer un fichier src/app/api/rsvp/route.ts
# Connecter à une base de données (MongoDB, PostgreSQL, etc.)
```

**Option 2 : Service Externe**
- [ ] Google Forms + Google Sheets
- [ ] Typeform
- [ ] Airtable
- [ ] EmailJS pour envoi d'emails

**Notifications Email**
- [ ] Configurer SendGrid / Mailgun / Resend
- [ ] Créer un template d'email de confirmation
- [ ] Tester l'envoi automatique

### Upload de Photos Invités

**Option 1 : Cloudinary**
```bash
npm install cloudinary
```

**Option 2 : AWS S3**
```bash
npm install aws-sdk
```

**Option 3 : Service Externe**
- [ ] Google Photos album partagé
- [ ] Dropbox
- [ ] WeTransfer

### QR Code pour Partage Photos

```bash
npm install qrcode
# Générer un QR code pointant vers l'album photo
```

---

## 🚀 Déploiement

### Avant le Déploiement

- [ ] Tester toutes les pages
- [ ] Vérifier le responsive mobile
- [ ] Tester les formulaires
- [ ] Optimiser les images
- [ ] Vérifier les performances (Lighthouse)
- [ ] Tester l'accessibilité

### Déploiement sur Vercel

```bash
# 1. Créer un compte Vercel
# 2. Connecter le repository GitHub
# 3. Importer le projet
# 4. Déployer automatiquement
```

Configuration recommandée :
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "nodeVersion": "20.x"
}
```

### Variables d'Environnement

Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_cle
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=votre_nom
EMAIL_API_KEY=votre_cle_email
```

---

## 📊 Analytics & Monitoring

### Google Analytics (Optionnel)

```bash
npm install @next/third-parties
```

Puis dans `layout.tsx` :
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

---

## 🧪 Tests Avant Lancement

### Checklist de Test

**Fonctionnalités**
- [ ] Navigation entre toutes les pages
- [ ] Formulaire RSVP se soumet correctement
- [ ] Compte à rebours fonctionne
- [ ] Lecteur de musique démarre/pause
- [ ] Carte Google Maps s'affiche
- [ ] Tous les liens externes fonctionnent

**Responsive**
- [ ] iPhone (375px)
- [ ] iPad (768px)
- [ ] Desktop (1920px)
- [ ] Orientation portrait et paysage

**Navigateurs**
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

**Performance**
- [ ] Score Lighthouse > 90
- [ ] Temps de chargement < 3s
- [ ] Images optimisées

**SEO**
- [ ] Métadonnées complètes
- [ ] Open Graph tags
- [ ] Sitemap généré
- [ ] Robots.txt configuré

---

## 📅 Timeline de Lancement

**3-4 mois avant le mariage**
- [ ] Finaliser le contenu
- [ ] Tester exhaustivement
- [ ] Déployer en production

**2-3 mois avant**
- [ ] Envoyer le lien aux invités
- [ ] Activer le formulaire RSVP
- [ ] Monitoring des confirmations

**1 mois avant**
- [ ] Rappel RSVP aux retardataires
- [ ] Mettre à jour les infos de dernière minute
- [ ] Préparer la galerie photo

**Après le mariage**
- [ ] Upload des photos officielles
- [ ] Activer le partage invités
- [ ] Message de remerciement

---

## 🆘 Support & Documentation

**Documentation Officielle**
- Next.js : https://nextjs.org/docs
- React : https://react.dev
- Tailwind : https://tailwindcss.com/docs

**Communauté**
- Stack Overflow : `[next.js]` tag
- GitHub Issues : Next.js repository
- Discord : Next.js Discord server

**Ressources Utiles**
- Vercel Guides : https://vercel.com/guides
- Next.js Examples : https://github.com/vercel/next.js/tree/canary/examples

---

## 💡 Conseils Finaux

1. **Sauvegardez régulièrement** votre code sur GitHub
2. **Testez sur de vrais appareils**, pas seulement les devtools
3. **Demandez des retours** à des amis/famille avant le lancement officiel
4. **Préparez un plan B** si le site a un problème le jour J
5. **Profitez du processus** de création de votre site de mariage unique !

---

**Bon courage et félicitations pour votre mariage ! 💕**