import Link from 'next/link';
import styles from './page.module.css';

export default function Cadeaux() {
  const giftIdeas = [
    {
      title: 'Voyage de noces',
      description: 'Aidez-nous à réaliser notre rêve : un voyage au Japon pour découvrir la culture et les traditions',
      icon: '✈️',
    },
    {
      title: 'Notre futur chez-nous',
      description: 'Une contribution pour aménager notre nouveau nid douillet',
      icon: '🏡',
    },
    {
      title: 'Expériences à deux',
      description: 'Des moments inoubliables : cours de cuisine, spa, spectacles...',
      icon: '🎭',
    },
  ];

  const stores = [
    { name: 'La Redoute', url: 'https://www.laredoute.fr' },
    { name: 'Maisons du Monde', url: 'https://www.maisonsdumonde.com' },
    { name: 'Galeries Lafayette', url: 'https://www.galerieslafayette.com' },
  ];

  return (
    <div className={styles.cadeauxPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.pageTitle} floral-accent fade-in`}>
            Liste de Cadeaux
          </h1>
          <p className={`${styles.pageSubtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
            Votre présence est le plus beau des cadeaux
          </p>
        </div>
      </section>

      {/* Message Section */}
      <section className={`${styles.messageSection} section`}>
        <div className="container">
          <div className={styles.messageCard}>
            <div className={styles.messageIcon}>💝</div>
            <h2 className={styles.messageTitle}>Un mot des mariés</h2>
            <p className={styles.messageText}>
              Chers amis et famille, votre présence à nos côtés le jour de notre 
              mariage est le plus précieux des cadeaux. Si toutefois vous souhaitez 
              nous faire plaisir, nous avons pensé à quelques idées qui nous 
              permettront de démarrer notre vie à deux dans les meilleures conditions.
            </p>
            <p className={styles.messageText}>
              Nous rêvons notamment d&apos;un voyage de noces au Japon, et toute 
              contribution à ce projet nous rendrait infiniment heureux ! 🌸
            </p>
          </div>
        </div>
      </section>

      {/* Gift Ideas */}
      <section className={`${styles.ideasSection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Nos envies
          </h2>
          <div className={styles.ideasGrid}>
            {giftIdeas.map((idea, index) => (
              <div key={index} className={styles.ideaCard}>
                <div className={styles.ideaIcon}>{idea.icon}</div>
                <h3 className={styles.ideaTitle}>{idea.title}</h3>
                <p className={styles.ideaDescription}>{idea.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cagnotte Section */}
      <section className={styles.cagnotteSection}>
        <div className="container">
          <div className={styles.cagnotteCard}>
            <h2 className={styles.cagnotteTitle}>💰 Cagnotte en ligne</h2>
            <p className={styles.cagnotteText}>
              Pour participer à notre voyage de noces et nos projets, 
              vous pouvez contribuer via notre cagnotte en ligne sécurisée.
            </p>
            <a 
              href="https://www.leetchi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.cagnotteButton}
            >
              Accéder à la cagnotte ❤️
            </a>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className={`${styles.storesSection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Listes de mariage en magasin
          </h2>
          <p className={styles.storesSubtitle}>
            Vous pouvez également consulter nos listes dans les enseignes suivantes
          </p>
          <div className={styles.storesGrid}>
            {stores.map((store, index) => (
              <a
                key={index}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeCard}
              >
                <div className={styles.storeIcon}>🎁</div>
                <h3 className={styles.storeName}>{store.name}</h3>
                <p className={styles.storeLink}>Voir la liste →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className={styles.thankYouSection}>
        <div className="container">
          <div className={styles.thankYouCard}>
            <h2 className={styles.thankYouTitle}>Merci du fond du cœur ! 💕</h2>
            <p className={styles.thankYouText}>
              Quelle que soit votre contribution, nous sommes profondément 
              touchés par votre générosité et votre amour. Vous nous aidez 
              à concrétiser nos rêves et à bien démarrer notre nouvelle vie ensemble.
            </p>
            <Link href="/rsvp" className={styles.rsvpLink}>
              N&apos;oubliez pas de confirmer votre présence →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
