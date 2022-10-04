import styles from '../styles/Home.module.css';
import Typewriter from 'typewriter-effect';

export default function Home () {
    return (
        <div className={styles.main0}>
            <div className={styles.main1}>
                <div className={styles.main2a}>
                    <label className={styles.lab1}><Typewriter onInit={(typewriter) => {typewriter.typeString('##############').start();}}options={{delay: 20, cursor: ""}}/></label>
                </div>
                <div className={styles.main2b}><br/>
                    <div className={styles.main3a}>
                        <div className={styles.main3a1}></div>
                        <label className={styles.lab2}>##</label>
                    </div>
                    <div className={styles.main3b}>
                        <div className={styles.main3b1}></div>
                        <div className={styles.main3b2}></div>
                        <div className={styles.main3b3}></div>
                        <label className={styles.lab2}>##</label>
                    </div>
                    <div className={styles.main3c}>
                        <div className={styles.main3c1}></div>
                        <div className={styles.main3c2}></div>
                        <label className={styles.lab2}>##</label>
                    </div><br/>
                </div>
            </div>
        </div>
    )
}