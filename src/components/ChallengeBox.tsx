import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBox}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong className={styles.challengeTitle}>NOVO DESAFIO!</strong>
            <p className={styles.challengeDescription}>{activeChallenge.description}</p>
          </main>
          <footer>
            <button 
              type="button" 
              className={styles.challengeFailedBtn} 
              onClick={handleChallengeFailed}
            >
                Falhei
            </button>
            <button 
              type="button" 
              className={styles.challengeSuccessBtn} 
              onClick={handleChallengeSucceeded}
            >
                Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize a contagem para receber novo desafio</strong>
          <div className={styles.informationLevel}>
            <img className={styles.imageLevelUp} src="icons/level-up.svg" alt="Level Up"/>
            <span>Você só avança de level quando completar um desafio</span>
          </div>
        </div>
      ) }
    </div>
  )
}