'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function RSVP() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    presence: 'oui',
    accompagnants: '0',
    regime: '',
    allergies: '',
    menu: 'viande',
    hebergement: 'non',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez envoyer les données à une API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.rsvpPage}>
        <section className={styles.thankYouSection}>
          <div className="container">
            <div className={styles.thankYouCard}>
              <div className={styles.thankYouIcon}>💕</div>
              <h1 className={styles.thankYouTitle}>Merci beaucoup !</h1>
              <p className={styles.thankYouText}>
                Nous avons bien reçu votre confirmation. Nous sommes ravis de 
                vous compter parmi nos invités pour ce jour si spécial !
              </p>
              <p className={styles.thankYouText}>
                Vous recevrez prochainement un email de confirmation avec 
                tous les détails nécessaires.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className={styles.backButton}
              >
                Retour au formulaire
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.rsvpPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.pageTitle} floral-accent fade-in`}>
            Confirmez votre présence
          </h1>
          <p className={`${styles.pageSubtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
            Merci de répondre avant le 1er juillet 2026
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={`${styles.formSection} section`}>
        <div className="container">
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Informations personnelles */}
              <div className={styles.formGroup}>
                <h3 className={styles.formSectionTitle}>Vos informations</h3>
                
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="nom" className={styles.label}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="prenom" className={styles.label}>
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="telephone" className={styles.label}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>

              {/* Présence */}
              <div className={styles.formGroup}>
                <h3 className={styles.formSectionTitle}>Votre présence</h3>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="presence" className={styles.label}>
                    Serez-vous présent(e) ? *
                  </label>
                  <select
                    id="presence"
                    name="presence"
                    value={formData.presence}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="oui">Oui, avec joie ! 🎉</option>
                    <option value="non">Non, malheureusement 😢</option>
                  </select>
                </div>

                {formData.presence === 'oui' && (
                  <>
                    <div className={styles.inputGroup}>
                      <label htmlFor="accompagnants" className={styles.label}>
                        Nombre d'accompagnants
                      </label>
                      <select
                        id="accompagnants"
                        name="accompagnants"
                        value={formData.accompagnants}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="menu" className={styles.label}>
                        Choix du menu *
                      </label>
                      <select
                        id="menu"
                        name="menu"
                        value={formData.menu}
                        onChange={handleChange}
                        required
                        className={styles.select}
                      >
                        <option value="viande">Viande</option>
                        <option value="poisson">Poisson</option>
                        <option value="vegetarien">Végétarien</option>
                        <option value="vegan">Végétalien</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="allergies" className={styles.label}>
                        Allergies ou régimes alimentaires
                      </label>
                      <input
                        type="text"
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder="Gluten, lactose, fruits à coque..."
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="hebergement" className={styles.label}>
                        Souhaitez-vous réserver une chambre à l&apos;hôtel partenaire ?
                      </label>
                      <select
                        id="hebergement"
                        name="hebergement"
                        value={formData.hebergement}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="non">Non merci</option>
                        <option value="oui">Oui, je suis intéressé(e)</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <h3 className={styles.formSectionTitle}>Votre message</h3>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Un petit mot pour les mariés ? 💌
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={styles.textarea}
                    placeholder="Partagez vos félicitations, anecdotes ou souhaits..."
                  />
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className={styles.submitButton}>
                Confirmer ma présence ✨
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
