'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './MusicPlayer.module.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.musicPlayer}>
      <audio
        ref={audioRef}
        loop
        src="/music/background-music.mp3"
      />
      
      <button
        onClick={togglePlay}
        className={styles.playButton}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? '⏸' : '♪'}
      </button>
      
      <div className={styles.volumeControl}>
        <span className={styles.volumeIcon}>🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className={styles.volumeSlider}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
