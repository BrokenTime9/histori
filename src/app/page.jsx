import styles from "./page.module.css";
import {Yeseva_One} from "@next/font/google"
import localFont from "@next/font/local";
const sansation = localFont ({src: '../../public/fonts/sansation/Sansation_Bold.ttf'});
const yeseva = Yeseva_One({subsets:['latin'], weight:['400']})

export default function Home() {
  return (
  <div className={`${styles.highestContainer} ${sansation.className}`}>
    <div className={styles.topSection}>
      <div className={styles.logo}>
      <p className={styles.logoMain}>Histori</p>
      <p className={styles.logoSub}>Tf, this happened?</p>
      </div>
      <div className={styles.info}>
      <p className={`${styles.infoMain} ${styles.equals}`}>Archaeology</p>
      <p className={styles.infoSub}>An art of revealing the past</p>
      </div>
      <p className={`${styles.navOne} ${styles.equals}`}>What we do?</p>
      <p className={`${styles.navOne} ${styles.equals}`}>Who we are?</p>
      <p className={`${styles.navOne} ${styles.equals}`}>Legal</p>
      <p className={`${styles.navOne} ${styles.equals}`}>Contact</p>
    </div>
    <div className={styles.centerTop}>
      <p className={styles.centerTopText}>There's no Future in archaeology</p>
      <p className={styles.centerTopText}>The entire field is in ruins</p>
    </div>
    <div className={`${styles.center} ${yeseva.className}`}>
      <p>We dig</p>
    </div>
    <div className={styles.right}>
      <p>Humans appeared, did some farming, Greeks and Romans built shit and fought. Middle Ages sucked, Renaissance was artsy bullshit, Europeans fucked up other lands. 20th century: two World Wars, Cold War, tech boom, now same old fucked-up shit.</p>
    </div>
    <div className={styles.containerOne}>
      <p className={styles.containerText}>Civilizations</p><div className={styles.containerCircle}>1.</div>
      <p className={styles.containerInfo}>Notable societies characterized by their advanced development and organization</p>

    </div>
     <div className={styles.containerTwo}>
      <p className={styles.containerTwoText}>Foundations of society</p><div className={styles.containerTwoCircle}>2.</div>
      <p className={styles.containerInfo}>Domains that contributed towards the civilizations functioning development and sustainability</p>


    </div>
    <div className={styles.containerThree}>
      <p className={styles.containerThreeText}>3. The <span>Denouement</span> of an Era </p>    
    </div>

    <div className={styles.cursor}></div>
    
    
  </div> 
  );
}
