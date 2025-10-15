# 🎵 Instructions pour la Musique de Fond

## Ajouter une musique de fond

Pour activer le lecteur de musique sur votre site, suivez ces étapes :

1. **Choisissez votre musique** : Sélectionnez un fichier audio au format MP3 (recommandé pour la compatibilité)

2. **Placez le fichier** : Copiez votre fichier audio dans ce dossier (`public/music/`) et nommez-le :
   ```
   background-music.mp3
   ```

3. **Format recommandé** :
   - Format : MP3 (128-192 kbps pour un bon compromis qualité/taille)
   - Durée : 3-5 minutes (en boucle)
   - Volume : Normalisé, pas trop fort
   - Type : Musique douce, instrumentale, romantique

## Suggestions de Musique

### Style Classique / Romantique
- Canon en D de Pachelbel
- Clair de Lune de Debussy
- Air de Bach
- Gymnopédie No. 1 d'Erik Satie

### Style Moderne / Acoustique
- River Flows in You - Yiruma
- Comptine d'un autre été - Yann Tiersen
- Kiss the Rain - Yiruma
- A Thousand Years - Instrumental

### Sources de Musique Libre de Droits

1. **YouTube Audio Library** : Musiques gratuites et libres de droits
2. **Epidemic Sound** : Service payant mais haute qualité
3. **Artlist** : Bibliothèque musicale pour créateurs
4. **Free Music Archive** : Musiques libres sous licence Creative Commons

## Droits d'Auteur

⚠️ **IMPORTANT** : Assurez-vous d'avoir les droits d'utilisation de la musique que vous choisissez, surtout si le site est public. Pour un usage privé (invités uniquement), les restrictions sont généralement plus souples.

## Configuration du Lecteur

Le lecteur de musique est déjà configuré dans le composant `MusicPlayer.tsx` :

- ▶️ **Lecture/Pause** : Bouton principal
- 🔊 **Volume** : Curseur de contrôle (par défaut à 30%)
- 🔁 **Loop** : Lecture en boucle activée
- 📱 **Mobile** : Responsive et adapté au touch

## Personnalisation

Si vous souhaitez modifier le comportement du lecteur :

1. Ouvrez `src/components/MusicPlayer.tsx`
2. Modifiez les paramètres :
   ```tsx
   const [volume, setVolume] = useState(0.3);  // Volume par défaut (0-1)
   ```

3. Pour désactiver la lecture en boucle :
   ```tsx
   <audio ref={audioRef} src="/music/background-music.mp3" />
   // Retirer l'attribut "loop"
   ```

## Test

1. Ajoutez votre fichier audio
2. Lancez le serveur : `npm run dev`
3. Ouvrez le site
4. Cliquez sur le bouton de musique en bas à droite
5. Ajustez le volume selon vos préférences

## Désactivation

Si vous ne souhaitez pas de musique :
- Supprimez `<MusicPlayer />` dans `src/app/layout.tsx`

---

**Note** : La musique démarre uniquement après interaction de l'utilisateur (clic sur le bouton play) pour respecter les politiques des navigateurs modernes.