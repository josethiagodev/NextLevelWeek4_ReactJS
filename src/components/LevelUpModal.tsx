import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal, name } = useContext(ChallengesContext);

  return (
    <div className={styles.overlayModal}>
      <div className={styles.containerModal}>
        <header>{level}</header>
        <strong>Parabéns {name}!</strong>
        <p>Você acabou de alcançar um novo level...</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal de Level"/>
        </button>
      </div>
    </div>
  )
}