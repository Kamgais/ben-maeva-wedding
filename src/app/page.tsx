import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/Countdown';
import styles from './page.module.css';

export default function Home() {
  // Date du mariage (à personnaliser)
  const weddingDate = '2026-08-15T16:00:00';

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/Couple.jpeg"
            alt="Ben & Maeva"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={`${styles.heroTitle} fade-in`}>
              Ben & Maeva
            </h1>
            <p className={`${styles.heroSubtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
              Nous nous marions !
            </p>
            <div className={`${styles.heroDate} fade-in`} style={{ animationDelay: '0.6s' }}>
              <span className={styles.dateIcon}>💍</span>
              <div className={styles.dateInfo}>
                <p className={styles.date}>15 Août 2026</p>
                <p className={styles.location}>Château de Beaumont, Paris</p>
              </div>
              <span className={styles.dateIcon}>💍</span>
            </div>
            <Link 
              href="/notre-histoire" 
              className={`${styles.ctaButton} fade-in`}
              style={{ animationDelay: '0.9s' }}
            >
              Découvrir notre histoire ❤️
            </Link>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollArrow}>↓</span>
        </div>
      </section>

      {/* Welcome Section */}
      <section className={`${styles.welcomeSection} section`}>
        <div className="container">
          <div className={styles.welcomeContent}>
            <h2 className={`${styles.sectionTitle} floral-accent`}>
              Bienvenue sur le site de notre mariage
            </h2>
            <p className={styles.welcomeText}>
              Chers amis et famille, nous sommes ravis de partager avec vous 
              le jour le plus important de notre vie. Sur ce site, vous trouverez 
              toutes les informations nécessaires pour célébrer avec nous ce moment unique.
            </p>
            <p className={styles.welcomeText}>
              Votre présence est le plus beau des cadeaux, et nous avons hâte de 
              créer des souvenirs inoubliables ensemble ! 💕
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className={styles.countdownSection}>
        <div className="container">
          <Countdown weddingDate={weddingDate} />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={`${styles.quickLinks} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Informations essentielles
          </h2>
          <div className={styles.linksGrid}>
            <Link href="/le-grand-jour" className={styles.linkCard}>
              <span className={styles.cardIcon}>📅</span>
              <h3 className={styles.cardTitle}>Le Grand Jour</h3>
              <p className={styles.cardDescription}>
                Programme, horaires et plan d&apos;accès
              </p>
            </Link>

            <Link href="/rsvp" className={styles.linkCard}>
              <span className={styles.cardIcon}>✉️</span>
              <h3 className={styles.cardTitle}>RSVP</h3>
              <p className={styles.cardDescription}>
                Confirmez votre présence avant le 1er juillet
              </p>
            </Link>

            <Link href="/cadeaux" className={styles.linkCard}>
              <span className={styles.cardIcon}>🎁</span>
              <h3 className={styles.cardTitle}>Liste de Cadeaux</h3>
              <p className={styles.cardDescription}>
                Si vous souhaitez nous faire plaisir
              </p>
            </Link>

            <Link href="/contact" className={styles.linkCard}>
              <span className={styles.cardIcon}>💬</span>
              <h3 className={styles.cardTitle}>Questions ?</h3>
              <p className={styles.cardDescription}>
                Consultez notre FAQ ou contactez-nous
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Love Quote Section */}
      <section className={styles.quoteSection}>
        <div className="container">
          <blockquote className={styles.quote}>
                      <p className={styles.quoteText}>
            &ldquo;L&apos;amour n&apos;est pas seulement un sentiment, c&apos;est un art, et comme tout art, il demande non seulement de l&apos;inspiration, mais aussi beaucoup de technique&rdquo;
          </p>
          <p className={styles.quoteAuthor}>— Erich Fromm</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
