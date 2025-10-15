# 🎨 Guide de Conception Visuelle - Site de Mariage Ben & Maeva

## 📋 Table des Matières
1. [Identité Visuelle](#identité-visuelle)
2. [Composants UI](#composants-ui)
3. [Animations & Transitions](#animations--transitions)
4. [Responsive Design](#responsive-design)
5. [Accessibilité](#accessibilité)

---

## 🌸 Identité Visuelle

### Palette de Couleurs

#### Couleurs Principales
```css
--color-ivory: #FAF7F2        /* Fond principal - doux et chaleureux */
--color-blush: #F4E4E4        /* Fond secondaire - rose très clair */
--color-rose: #E8B4B8         /* Accent principal - rose poudré */
--color-gold: #D4AF6A         /* Accent doré - élégance */
--color-eucalyptus: #A8B8A5   /* Vert eucalyptus - fraîcheur */
--color-sage: #8B9D83         /* Vert sauge - naturel */
--color-charcoal: #4A4A4A     /* Texte principal - lisibilité */
--color-white: #FFFFFF        /* Blanc pur - contraste */
```

#### Utilisation des Couleurs

**Fonds**
- Sections principales : `ivory` ou `white`
- Sections alternées : Dégradés `blush → ivory`
- Sections d'accent : Dégradés `eucalyptus → sage`

**Texte**
- Titres principaux : `rose`
- Sous-titres : `charcoal`
- Texte corps : `charcoal` avec opacité 0.8
- Liens : `charcoal` → `rose` au hover

**Boutons & CTA**
- Primaires : Dégradé `rose → gold`
- Secondaires : `eucalyptus` → `sage` au hover
- États : Shadow et transform au hover

### Typographie

#### Familles de Polices

**Cormorant Garamond** (Display)
- Usage : Titres, noms des mariés, citations
- Poids : 300 (light), 400 (regular), 600 (semi-bold)
- Style : Élégant, romantique, serif avec italique
- Tailles : 2rem à 6rem (responsive avec clamp)

**Montserrat** (Body)
- Usage : Texte courant, navigation, formulaires
- Poids : 300, 400, 500, 600
- Style : Moderne, lisible, sans-serif
- Tailles : 0.9rem à 1.2rem

#### Hiérarchie Typographique

```css
h1: clamp(2.5rem, 5vw, 4.5rem)  /* Titres de page */
h2: clamp(2rem, 4vw, 3.5rem)    /* Sections */
h3: clamp(1.5rem, 3vw, 2.5rem)  /* Sous-sections */
p:  clamp(1rem, 2vw, 1.125rem)  /* Corps de texte */
```

### Iconographie

**Style** : Emojis Unicode pour la simplicité et la compatibilité
- 💕 💍 ❤️ (Amour & mariage)
- 📅 📸 🎁 (Fonctionnalités)
- 🌸 🍃 ❋ (Motifs floraux décoratifs)

---

## 🧩 Composants UI

### Navigation

**Structure**
- Position : Fixed top
- Fond : Blanc cassé semi-transparent avec blur
- État scrollé : Shadow + padding réduit
- Mobile : Menu hamburger avec slide-in

**Interactions**
- Hover : Soulignement animé sous les liens
- Couleur : Charcoal → Rose
- Transition : 300ms ease

### Hero Section

**Composition**
- Image pleine largeur avec overlay gradient
- Texte centré sur fond blanc semi-transparent
- Compte à rebours intégré
- CTA proéminent

**Effets**
- Parallax subtil (optionnel)
- Fade-in en cascade sur les éléments
- Indicateur de scroll animé

### Cards

**Design**
- Fond : Dégradés doux ou blanc
- Border-radius : 15-20px
- Shadow : Légère, augmente au hover
- Padding : 1.5rem à 2rem

**Variantes**
1. **Info Cards** : Icon + titre + description
2. **Timeline Cards** : Année + titre + description + image
3. **Contact Cards** : Icon + nom + rôle + liens

### Formulaires

**Style des Inputs**
- Border : 2px solid blush
- Focus : Border rose + shadow rose légère
- Border-radius : 10px
- Padding : 0.875rem 1rem

**Boutons**
- Primaire : Dégradé rose-doré, texte blanc
- Hover : Transform translateY(-3px) + shadow
- Active : Transform scale(0.98)
- Disabled : Opacité 0.6, no hover

### Footer

**Structure**
- 4 colonnes responsive
- Dégradé de fond blush → ivory
- Liens avec transition hover
- Icônes sociales avec animation rotate

---

## ✨ Animations & Transitions

### Animations Globales

**fadeIn**
```css
@keyframes fadeIn {
  from: opacity 0, translateY(20px)
  to: opacity 1, translateY(0)
}
Duration: 0.8s
```

**slideInLeft / slideInRight**
```css
from: opacity 0, translateX(±30px)
to: opacity 1, translateX(0)
Duration: 0.8s
```

**float**
```css
0%, 100%: translateY(0)
50%: translateY(-10px)
Duration: 3s infinite
```

**pulse**
```css
0%, 100%: opacity 1
50%: opacity 0.7
Duration: 2s infinite
```

### Transitions Standards

**Rapide** : 200ms ease (hover subtils)
**Base** : 300ms ease (interactions standards)
**Lente** : 500ms ease (transitions de page)

### Micro-interactions

- **Cards hover** : translateY(-5px à -10px)
- **Buttons hover** : translateY(-3px) + shadow
- **Images hover** : scale(1.05)
- **Links hover** : Underline animation
- **Menu mobile** : slideDown avec fade

---

## 📱 Responsive Design

### Breakpoints

```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
Large Desktop: > 1400px
```

### Adaptations Mobile

**Navigation**
- Menu hamburger
- Full-screen overlay
- Liens empilés verticalement

**Grids**
- Desktop : 2-4 colonnes
- Tablet : 2 colonnes
- Mobile : 1 colonne

**Typography**
- Utilisation systématique de `clamp()`
- Réduction des tailles de 20-30%
- Line-height augmenté pour lisibilité

**Spacing**
- Padding et margins réduits
- Container padding : 1rem (mobile) → 2rem (desktop)

**Images**
- Aspect ratio maintenu
- Object-fit: cover
- Lazy loading

### Touch Interactions

- Zones cliquables : Minimum 44x44px
- Hover states adaptés pour touch
- Swipe gestures sur la galerie (recommandé)

---

## ♿ Accessibilité

### Standards Respectés

- **WCAG 2.1 Level AA**
- Contrastes de couleurs validés
- Navigation au clavier complète
- Screen reader friendly

### Implémentation

**Sémantique HTML**
```html
<header>, <nav>, <main>, <section>, <article>, <footer>
Heading hierarchy (h1 → h6)
<button> vs <a> utilisés correctement
```

**ARIA Labels**
- aria-label sur boutons icônes
- aria-expanded sur accordéons
- aria-current sur navigation active
- role="navigation", role="main"

**Contraste**
- Texte normal : Min 4.5:1
- Texte large : Min 3:1
- Tous les contrastes validés

**Navigation Clavier**
- Tab order logique
- Focus visible (outline ou box-shadow)
- Skip to main content (recommandé)
- Esc pour fermer les modales

**Images**
- Alt text descriptif sur toutes les images
- Images décoratives : alt=""
- Icônes : aria-hidden="true" + texte alternatif

### Tests Recommandés

1. Navigation clavier complète
2. Test avec screen reader (NVDA, JAWS)
3. Validation HTML/CSS
4. Lighthouse Accessibility score
5. axe DevTools

---

## 🎯 Bonnes Pratiques

### Performance

- **Images** : WebP + fallback, lazy loading
- **Fonts** : Preload, font-display: swap
- **CSS** : Modules, code splitting automatique
- **JS** : 'use client' uniquement si nécessaire

### SEO

```tsx
// Metadata dans chaque page
export const metadata = {
  title: "Ben & Maeva - Notre Mariage",
  description: "...",
  keywords: ["mariage", "..."],
  openGraph: { ... }
}
```

### Optimisation

- Critical CSS inline
- Code splitting par route (Next.js automatique)
- Compression images (next/image)
- Caching statique

---

## 📐 Grille & Spacing

### Système d'Espacement

```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 2rem     /* 32px */
--spacing-lg: 3rem     /* 48px */
--spacing-xl: 4rem     /* 64px */
```

### Container

```css
max-width: 1200px (général)
max-width: 800px (contenu texte)
max-width: 1400px (grilles larges)
padding: 0 2rem (desktop), 0 1rem (mobile)
```

### Grilles CSS

```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: var(--spacing-md);
```

---

## 🔮 Design Tokens (Résumé)

```css
/* Colors */
--color-*: [voir palette]

/* Typography */
--font-display: 'Cormorant Garamond', serif;
--font-body: 'Montserrat', sans-serif;

/* Spacing */
--spacing-*: [voir système]

/* Shadows */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);

/* Transitions */
--transition-fast: 200ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;
```

---

## 💡 Conseils de Personnalisation

1. **Modifier les couleurs** : Éditer les variables CSS dans `globals.css`
2. **Changer les fonts** : Importer depuis Google Fonts et mettre à jour les variables
3. **Ajuster les animations** : Modifier les keyframes et durations
4. **Adapter le responsive** : Ajuster les breakpoints dans les media queries
5. **Optimiser les images** : Utiliser next/image avec les bonnes tailles

---

**Document créé le 15 octobre 2025**  
**Version 1.0**