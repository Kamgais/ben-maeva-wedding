'use client';

import styles from './page.module.css';

export default function LeGrandJour() {
  const programme = [
    {
      time: '14:00',
      title: 'Arrivée des invités',
      description: 'Accueil au Château de Beaumont avec vin d\'honneur',
      icon: '🥂',
    },
    {
      time: '15:00',
      title: 'Cérémonie laïque',
      description: 'Échange des vœux dans les jardins du château',
      icon: '💒',
    },
    {
      time: '16:30',
      title: 'Cocktail',
      description: 'Vin d\'honneur et canapés dans le parc',
      icon: '🍾',
    },
    {
      time: '19:00',
      title: 'Dîner de gala',
      description: 'Repas gastronomique dans la salle de réception',
      icon: '🍽️',
    },
    {
      time: '22:00',
      title: 'Ouverture du bal',
      description: 'Première danse des mariés',
      icon: '💃',
    },
    {
      time: '23:00',
      title: 'Soirée dansante',
      description: 'Fête jusqu\'au bout de la nuit !',
      icon: '🎉',
    },
  ];

  const infos = [
    {
      title: 'Dress Code',
      description: 'Tenue de soirée élégante. Messieurs : costume ou smoking. Dames : robe de cocktail ou longue.',
      icon: '👗',
    },
    {
      title: 'Hébergement',
      description: 'Hôtel Le Jardin (5 min du château) - Tarif préférentiel avec code "BENMAEVA". Réservation avant le 1er juin.',
      icon: '🏨',
    },
    {
      title: 'Parking',
      description: 'Parking gratuit disponible sur place avec voiturier. Service navette entre l\'hôtel et le château.',
      icon: '🚗',
    },
    {
      title: 'Enfants',
      description: 'Les enfants sont les bienvenus ! Service de garde disponible sur demande lors de la confirmation.',
      icon: '👶',
    },
  ];

  return (
    <div className={styles.grandJourPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.pageTitle} floral-accent fade-in`}>
            Le Grand Jour
          </h1>
          <p className={`${styles.pageSubtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
            15 Août 2026 • Château de Beaumont, Paris
          </p>
        </div>
      </section>

      {/* Programme */}
      <section className={`${styles.programmeSection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Programme de la journée
          </h2>
          <div className={styles.programmeTimeline}>
            {programme.map((item, index) => (
              <div key={index} className={styles.programmeItem}>
                <div className={styles.programmeIcon}>{item.icon}</div>
                <div className={styles.programmeTime}>{item.time}</div>
                <div className={styles.programmeContent}>
                  <h3 className={styles.programmeTitle}>{item.title}</h3>
                  <p className={styles.programmeDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Plan d'accès
          </h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081934!2d2.292292615674073!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8d%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.address}>
            <h3 className={styles.addressTitle}>Château de Beaumont</h3>
            <p className={styles.addressText}>123 Avenue des Châteaux</p>
            <p className={styles.addressText}>75016 Paris, France</p>
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              Obtenir l'itinéraire →
            </a>
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className={`${styles.infosSection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Informations pratiques
          </h2>
          <div className={styles.infosGrid}>
            {infos.map((info, index) => (
              <div key={index} className={styles.infoCard}>
                <div className={styles.infoIcon}>{info.icon}</div>
                <h3 className={styles.infoTitle}>{info.title}</h3>
                <p className={styles.infoDescription}>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather */}
      <section className={styles.weatherSection}>
        <div className="container">
          <div className={styles.weatherCard}>
            <h3 className={styles.weatherTitle}>☀️ Météo en août</h3>
            <p className={styles.weatherText}>
              Températures agréables prévues : 25-28°C. Nous vous recommandons 
              d'apporter une petite veste pour la soirée. En cas de pluie, 
              la cérémonie aura lieu dans l'orangerie couverte.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
