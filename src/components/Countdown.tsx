'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

interface TimeLeft {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
}

export default function Countdown({ weddingDate }: { weddingDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(weddingDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
          heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          secondes: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className={styles.countdown}>
      <h3 className={styles.title}>Compte à rebours</h3>
      <div className={styles.timeContainer}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className={styles.timeBox}>
            <div className={styles.number}>{value}</div>
            <div className={styles.label}>{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
