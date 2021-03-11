import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
   const { level } = useContext(ChallengesContext);

   return (
      <div className={styles.profileContainer}>
         <div className={styles.profileUser}>
            <img src="https://github.com/josethiagodev.png" alt="Imagem de Perfil" />
            <div className={styles.profileDescription}>
               <strong>José Thiago Pinto</strong>
               <span>
                  <img className={styles.iconLevel} src="icons/level.svg" alt="Icone Level" />
                  <p className={styles.textLevel}>Level {level}</p>
               </span>
            </div>
         </div>
      </div>
   )
}