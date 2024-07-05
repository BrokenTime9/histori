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
      <p className={`${styles.navTwo} ${styles.equals}`}>Who we are?</p>
      <p className={`${styles.navThree} ${styles.equals}`}>Legal</p>
      <p className={`${styles.navFour} ${styles.equals}`}>Contact</p>
    </div>
    <div className={styles.centerTop}>
      <p className={styles.centerTopText}>There's no Future in archaeology</p>
      <p className={styles.centerTopText}>The entire field is in ruins</p>
    </div>
    <div className={`${styles.center} ${yeseva.className}`}>
      <p>We dig</p>
    </div>
    
  </div> 
  );
}
