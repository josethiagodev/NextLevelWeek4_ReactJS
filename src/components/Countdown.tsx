import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
   const { 
      minutes, 
      seconds, 
      hasFinished, 
      isActive, 
      startCountdown, 
      resetCountdown, 
   } = useContext(CountdownContext);

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   return (
      <div className={styles.countdownContainer}>
         <div className={styles.counterNumber}>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
         </div>
         <span className={styles.centerPoint}>:</span>
         <div className={styles.counterNumber}>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
         </div>

         { hasFinished ? (
            <button 
            disabled 
            className={styles.countdownBtn}
            >
               Contagem encerrada
            </button>
         ) : (
            <>
               { isActive ? (
                  <button 
                  type="button" 
                  className={`${styles.countdownBtn} ${styles.countdownBtnActive}`} 
                  onClick={resetCountdown}
                  >
                     Finalizar contagem
                  </button>
               ) : (
                  <button 
                     type="button" 
                     className={styles.countdownBtn} 
                     onClick={startCountdown}
                  >
                     Iniciar contagem
                  </button>
               ) }
            </>
         )}
      </div>
   );
   
}