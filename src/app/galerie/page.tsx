'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Galerie() {
  const [showQRCode, setShowQRCode] = useState(false);

  // Photos de démonstration (à remplacer par les vraies photos)
  const photos = Array(12).fill('/Couple.jpeg');

  return (
    <div className={styles.galeriePage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.pageTitle} floral-accent fade-in`}>
            Galerie Photos & Vidéos
          </h1>
          <p className={`${styles.pageSubtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
            Nos plus beaux souvenirs
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className={`${styles.uploadSection} section`}>
        <div className="container">
          <div className={styles.uploadCard}>
            <h2 className={styles.uploadTitle}>📸 Partagez vos photos avec nous !</h2>
            <p className={styles.uploadText}>
              Immortalisez notre mariage sous votre angle ! Partagez vos photos 
              et vidéos en scannant le QR code ci-dessous ou en utilisant le lien.
            </p>
            
            <button 
              onClick={() => setShowQRCode(!showQRCode)}
              className={styles.qrButton}
            >
              {showQRCode ? 'Masquer le QR Code' : 'Afficher le QR Code'}
            </button>

            {showQRCode && (
              <div className={styles.qrContainer}>
                <div className={styles.qrPlaceholder}>
                  {/* Placeholder pour QR code */}
                  <div className={styles.qrBox}>
                    <p>QR Code</p>
                    <p className={styles.qrLink}>album.benmaeva.com</p>
                  </div>
                </div>
                <p className={styles.qrInstructions}>
                  Ou utilisez ce lien : <strong>album.benmaeva.com</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className={`${styles.gallerySection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Photos officielles
          </h2>
          <p className={styles.sectionSubtitle}>
            Les photos du mariage seront disponibles ici après la cérémonie
          </p>
          
          <div className={styles.photoGrid}>
            {photos.map((photo, index) => (
              <div key={index} className={styles.photoItem}>
                <Image
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  width={400}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.photoOverlay}>
                  <button className={styles.viewButton}>Voir</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Vidéo du mariage
          </h2>
          <div className={styles.videoContainer}>
            <div className={styles.videoPlaceholder}>
              <p className={styles.videoText}>
                🎥 La vidéo sera disponible prochainement
              </p>
              <p className={styles.videoSubtext}>
                Notre vidéaste travaille sur les plus beaux moments de notre journée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className={`${styles.downloadSection} section`}>
        <div className="container">
          <div className={styles.downloadCard}>
            <h2 className={styles.downloadTitle}>💾 Télécharger toutes les photos</h2>
            <p className={styles.downloadText}>
              Vous pouvez télécharger l'album complet en haute résolution
            </p>
            <button className={styles.downloadButton}>
              Télécharger l'album complet (ZIP)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
