import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Ben & Maeva</h3>
            <p className={styles.tagline}>Ensemble pour toujours ❤️</p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Navigation</h4>
            <ul className={styles.links}>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/notre-histoire">Notre Histoire</Link></li>
              <li><Link href="/le-grand-jour">Le Grand Jour</Link></li>
              <li><Link href="/rsvp">RSVP</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Informations</h4>
            <ul className={styles.links}>
              <li><Link href="/galerie">Galerie</Link></li>
              <li><Link href="/cadeaux">Liste de Cadeaux</Link></li>
              <li><Link href="/contact">Contact & FAQ</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Suivez-nous</h4>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                📷
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                📘
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Ben & Maeva • Fait avec amour 💕
          </p>
        </div>
      </div>
    </footer>
  );
}
