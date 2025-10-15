'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'Quelle est la tenue de rigueur ?',
      answer: 'Nous souhaitons une tenue de soirée élégante. Messieurs : costume ou smoking. Dames : robe de cocktail ou longue. Évitez le blanc (réservé à la mariée) et le noir total.',
    },
    {
      question: 'Puis-je venir avec mes enfants ?',
      answer: 'Bien sûr ! Les enfants sont les bienvenus. Nous proposons un service de garde sur demande pendant le dîner et la soirée. Merci de nous le préciser lors de votre confirmation.',
    },
    {
      question: 'Y a-t-il un hébergement à proximité ?',
      answer: 'Oui ! L\'Hôtel Le Jardin est situé à 5 minutes du château. Nous avons négocié un tarif préférentiel. Utilisez le code "BENMAEVA" lors de votre réservation avant le 1er juin.',
    },
    {
      question: 'Comment se rendre au château ?',
      answer: 'Le château est accessible en voiture (parking gratuit sur place). Pour ceux qui viennent en transport en commun, une navette sera disponible depuis la gare la plus proche. Plus de détails sur la page "Le Grand Jour".',
    },
    {
      question: 'Puis-je prendre des photos pendant la cérémonie ?',
      answer: 'Nous avons un photographe professionnel qui immortalisera tous les moments importants. Nous vous demandons de profiter pleinement de l\'instant présent pendant la cérémonie. Vous pourrez prendre autant de photos que vous voulez pendant le cocktail et la soirée !',
    },
    {
      question: 'Quel est le menu prévu ?',
      answer: 'Nous proposons un menu gastronomique avec choix entre viande, poisson, végétarien et végétalien. Merci de préciser votre choix et vos éventuelles allergies dans le formulaire RSVP.',
    },
    {
      question: 'Puis-je apporter un cadeau le jour du mariage ?',
      answer: 'C\'est très gentil ! Si vous souhaitez nous offrir un cadeau, nous avons mis en place une urne qui sera disponible le jour J. Vous pouvez également contribuer à notre cagnotte en ligne ou consulter nos listes en magasin.',
    },
    {
      question: 'Jusqu\'à quelle heure dure la soirée ?',
      answer: 'La fête continue jusqu\'à 4h du matin ! Une navette sera mise en place pour raccompagner les invités à l\'hôtel partenaire à différents horaires (minuit, 2h et 4h).',
    },
    {
      question: 'Que faire si je ne peux finalement pas venir ?',
      answer: 'Nous comprenons que les imprévus arrivent. Merci de nous prévenir dès que possible par email ou téléphone afin que nous puissions ajuster l\'organisation.',
    },
  ];

  const contacts = [
    {
      name: 'Ben',
      role: 'Le marié',
      email: 'ben@example.com',
      phone: '+33 6 12 34 56 78',
      icon: '🤵',
    },
    {
      name: 'Maeva',
      role: 'La mariée',
      email: 'maeva@example.com',
      phone: '+33 6 98 76 54 32',
      icon: '👰',
    },
    {
      name: 'Sophie',
      role: 'Témoin',
      email: 'sophie@example.com',
      phone: '+33 6 11 22 33 44',
      icon: '💐',
    },
    {
      name: 'Thomas',
      role: 'Témoin',
      email: 'thomas@example.com',
      phone: '+33 6 55 66 77 88',
      icon: '🎩',
    },
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.pageTitle} floral-accent fade-in`}>
            Contact & FAQ
          </h1>
          <p className={`${styles.pageSubtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
            Toutes les réponses à vos questions
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faqSection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Questions fréquentes
          </h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.faqIcon}>
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} floral-accent`}>
            Nous contacter
          </h2>
          <p className={styles.contactSubtitle}>
            Une question ? N'hésitez pas à nous contacter directement
          </p>
          <div className={styles.contactGrid}>
            {contacts.map((contact, index) => (
              <div key={index} className={styles.contactCard}>
                <div className={styles.contactIcon}>{contact.icon}</div>
                <h3 className={styles.contactName}>{contact.name}</h3>
                <p className={styles.contactRole}>{contact.role}</p>
                <div className={styles.contactInfo}>
                  <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                    📧 {contact.email}
                  </a>
                  <a href={`tel:${contact.phone}`} className={styles.contactLink}>
                    📱 {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className={`${styles.emergencySection} section`}>
        <div className="container">
          <div className={styles.emergencyCard}>
            <h2 className={styles.emergencyTitle}>🚨 Urgence le jour J</h2>
            <p className={styles.emergencyText}>
              Pour toute urgence le jour du mariage (retard, problème de transport, etc.), 
              contactez notre coordinateur de mariage :
            </p>
            <div className={styles.emergencyContact}>
              <p className={styles.emergencyName}>Julie Moreau</p>
              <a href="tel:+33612345678" className={styles.emergencyPhone}>
                📞 +33 6 12 34 56 78
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
