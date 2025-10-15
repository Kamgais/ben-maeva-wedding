# 💕 Site de Mariage Ben & Maeva

Site web élégant et moderne pour le mariage de Ben & Maeva, conçu pour offrir une expérience unique aux invités.

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- Hero section avec photo pleine largeur
- Compte à rebours jusqu'au jour du mariage
- Présentation chaleureuse
- Navigation rapide vers les sections principales

### 💑 Notre Histoire
- Timeline interactive des moments clés du couple
- Galerie de photos souvenirs
- Citations romantiques personnalisées
- Design moderne avec animations fluides

### 📅 Le Grand Jour
- Programme détaillé de la journée
- Carte Google Maps interactive
- Informations pratiques (hébergement, parking, météo)
- Dress code et conseils

### ✉️ RSVP
- Formulaire de confirmation de présence
- Gestion des accompagnants
- Choix de menu (viande, poisson, végétarien, vegan)
- Gestion des allergies alimentaires
- Message de remerciement automatique

### 📸 Galerie
- Affichage des photos officielles
- Option de partage pour les invités (QR code)
- Téléchargement d'album complet
- Section vidéo du mariage

### 🎁 Liste de Cadeaux
- Message personnel des mariés
- Lien vers cagnotte en ligne
- Listes en magasin partenaires
- Design élégant et sobre

### 💬 Contact & FAQ
- FAQ complète et interactive
- Coordonnées des mariés et témoins
- Numéro d'urgence le jour J
- Réponses aux questions courantes

## 🎨 Identité Visuelle

### Palette de Couleurs
- **Blanc cassé** (`#FAF7F2`) - Fond principal
- **Rose poudré** (`#F4E4E4`, `#E8B4B8`) - Accent romantique
- **Doré clair** (`#D4AF6A`) - Touches élégantes
- **Vert eucalyptus** (`#A8B8A5`, `#8B9D83`) - Fraîcheur naturelle
- **Charcoal** (`#4A4A4A`) - Texte principal

### Typographie
- **Display** : Cormorant Garamond (titres élégants et romantiques)
- **Body** : Montserrat (texte lisible et moderne)

### Animations
- Fade-in au scroll
- Slide-in pour les éléments latéraux
- Float pour les icônes
- Transitions douces sur tous les éléments interactifs

## 🛠 Technologies

- **Framework** : [Next.js 15.5.5](https://nextjs.org/)
- **Runtime** : React 19.1.0
- **Styling** : CSS Modules + Tailwind CSS 4
- **Language** : TypeScript
- **Fonts** : Google Fonts (Cormorant Garamond, Montserrat)

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ ou 20+
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Démarrage en développement

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm run start
```

## 📁 Structure du Projet

```
wedding-site/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Page d'accueil
│   │   ├── notre-histoire/       # Notre histoire
│   │   ├── le-grand-jour/        # Le grand jour
│   │   ├── rsvp/                 # Formulaire RSVP
│   │   ├── galerie/              # Galerie photos
│   │   ├── cadeaux/              # Liste de cadeaux
│   │   ├── contact/              # Contact & FAQ
│   │   ├── layout.tsx            # Layout principal
│   │   └── globals.css           # Styles globaux
│   └── components/
│       ├── Navigation.tsx        # Menu navigation
│       ├── Footer.tsx            # Pied de page
│       ├── Countdown.tsx         # Compte à rebours
│       └── MusicPlayer.tsx       # Lecteur de musique
├── public/
│   └── Couple.jpeg               # Photo du couple
├── package.json
└── README.md
```

## 🎯 Personnalisation

### Modifier les informations du mariage

1. **Date du mariage** : Dans `src/app/page.tsx`, modifier `weddingDate`
2. **Lieu** : Modifier les informations dans `src/app/le-grand-jour/page.tsx`
3. **Photos** : Remplacer les images dans le dossier `public/`
4. **Timeline** : Personnaliser dans `src/app/notre-histoire/page.tsx`

### Ajouter de la musique

Placer un fichier audio dans `public/music/background-music.mp3`

### Modifier les couleurs

Éditer les variables CSS dans `src/app/globals.css` :
```css
:root {
  --color-ivory: #FAF7F2;
  --color-rose: #E8B4B8;
  --color-gold: #D4AF6A;
  /* ... */
}
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (< 768px)
- 📲 Tablette (768px - 1024px)
- 💻 Desktop (> 1024px)

## ♿ Accessibilité

- Utilisation de balises sémantiques HTML5
- Navigation au clavier
- Labels ARIA sur les éléments interactifs
- Contraste de couleurs respectant les normes WCAG
- Alt text sur toutes les images

## 🎵 Fonctionnalités Supplémentaires

### Lecteur de musique
- Lecture/pause
- Contrôle du volume
- Position fixe en bas à droite
- Responsive

### Compte à rebours
- Mise à jour en temps réel
- Affichage jours, heures, minutes, secondes
- Design élégant et fluide

## 🚢 Déploiement

### Vercel (recommandé)
1. Push le code sur GitHub
2. Connecter le repo à [Vercel](https://vercel.com)
3. Déploiement automatique

### Netlify
1. Build command : `npm run build`
2. Publish directory : `.next`

## 📝 TODO / Améliorations futures

- [ ] Intégration d'un système de backend pour RSVP (API Route)
- [ ] Upload de photos par les invités (Cloudinary, AWS S3)
- [ ] Envoi d'emails automatiques de confirmation
- [ ] Génération de QR code dynamique pour le partage
- [ ] Galerie photo avec lightbox
- [ ] Internationalisation (i18n) si invités internationaux
- [ ] Analytics (Google Analytics, Vercel Analytics)

## 📄 Licence

Ce projet est créé pour un usage personnel (mariage de Ben & Maeva).

## 💌 Contact

Pour toute question concernant le site :
- Ben : ben@example.com
- Maeva : maeva@example.com

---

Fait avec ❤️ pour Ben & Maeva
