import Image from 'next/image';
import styles from './page.module.css';

export default function NotreHistoire() {
  const timeline = [
    {
      year: '2018',
      title: 'La rencontre',
      description: 'Nos regards se sont croisés pour la première fois lors d\'une soirée entre amis. Un coup de foudre immédiat qui a changé nos vies à jamais.',
      image: '/Couple.jpeg',
    },
    {
      year: '2019',
      title: 'Premier voyage ensemble',
      description: 'Direction l\'Italie pour découvrir Venise et Rome. C\'est là que nous avons compris que nous étions faits l\'un pour l\'autre.',
      image: '/Couple.jpeg',
    },
    {
      year: '2021',
      title: 'Emménagement',
      description: 'Nous avons franchi une étape importante en emménageant ensemble dans notre premier appartement. Le début de notre nouvelle vie à deux.',
      image: '/Couple.jpeg',
    },
    {
      year: '2024',
      title: 'La demande',
      description: 'Ben a fait sa demande lors d\'un coucher de soleil magique au bord de la mer. Maeva a dit OUI sans hésitation ! 💍',
      image: '/Couple.jpeg',
    },
    {
      year: '2026',
      title: 'Le mariage',
      description: 'Nous allons nous dire OUI devant nos proches et célébrer notre amour. Le plus beau jour de notre vie !',
      image: '/Couple.jpeg',
    },
  ];

  const quotes = [
    {
      text: 'Aimer, ce n\'est pas se regarder l\'un l\'autre, c\'est regarder ensemble dans la même direction.',
      author: 'Antoine de Saint-Exupéry',
    },
    {
      text: 'Tu es ma personne favorite, mon meilleur ami et mon plus grand amour.',
      author: 'Ben & Maeva',
    },
  ];

  return (
    <div className={styles.histoirePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.pageTitle} floral-accent fade-in`}>
            Notre Histoire d'Amour
          </h1>
          <p className={`${styles.pageSubtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
            Le début d'un conte de fées moderne
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`${styles.timelineSection} section`}>
        <div className="container">
          <div className={styles.timeline}>
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineImage}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      style={{ objectFit: 'cover', borderRadius: '15px' }}
                    />
                  </div>
                  <div className={styles.timelineText}>
                    <span className={styles.timelineYear}>{event.year}</span>
                    <h3 className={styles.timelineTitle}>{event.title}</h3>
                    <p className={styles.timelineDescription}>{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className={styles.quotesSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Nos citations préférées
          </h2>
          <div className={styles.quotesGrid}>
            {quotes.map((quote, index) => (
              <blockquote key={index} className={styles.quoteCard}>
                <p className={styles.quoteText}>"{quote.text}"</p>
                <cite className={styles.quoteAuthor}>— {quote.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className={`${styles.galleryPreview} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Quelques souvenirs
          </h2>
          <div className={styles.photoGrid}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.photoItem}>
                <Image
                  src="/Couple.jpeg"
                  alt={`Photo ${i}`}
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover', borderRadius: '15px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
