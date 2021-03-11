import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  // Calculando a pontuação 'quantidade de xp'
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span className={styles.valueXP}>0 xp</span>
      <div className={styles.progress}>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.current} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span className={styles.valueXP}>{experienceToNextLevel} xp</span>
    </header>
  )
}