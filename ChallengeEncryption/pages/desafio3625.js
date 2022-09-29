import styles from '../styles/Desafio.module.css';
import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import { GO } from '../components/desafio3625/list';
import { Fin, OK } from '../components/desafio3625/consts';
import nookies from 'nookies';

export default function Desafio() {

  return (
      <> 
        <Head>
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='googlebot' content='noindex, nofollow' />
          <meta name='author' content='Cybersecurity Team' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <title>CYBER: Cifra de César</title>
        </Head>

        <div className={styles.main0}>
            <main className={styles.main1}>
                <div className={styles.lab1}>
                    <label className={styles.lab2}><Typewriter onInit={(typewriter) => {typewriter.typeString('Cifra de César').start();}}options={{delay: 100}}/></label><br/>
                    <label className={styles.lab3}><Typewriter onInit={(typewriter) => {typewriter.pauseFor(9000).typeString('eHBkIGZkZXVkIHZ4dWlyeCBxciBwZHU=').start();}}options={{delay: 200, cursor: ""}}/></label>
                </div>
                <div id='name' className={styles.name0}>
                    <input id='inputname' className={styles.name1} placeholder='Digite seu nome completo'></input><button id='buttonname' className={styles.name2} onClick={OK}>OK</button>
                </div>


                <div className={styles.lab5}>
                    <label className={styles.lab4}><Typewriter onInit={(typewriter) => {typewriter.pauseFor(15000).typeString('Selecione a opção correta com cuidado:').start();}}options={{delay: 100, cursor: ""}}/></label><br/>
                    <div id='result' className={styles.butt0}>
                        <button id='phrase1' className={styles.butt1} onClick={Fin}>Uma abelha se recuperou</button>
                        <button id='phrase2' className={styles.butt1} onClick={Fin}>Um dinossauro foi avistado</button>
                        <button id='phrase3' className={styles.butt1} onClick={GO}>Nenhum</button>
                    </div>
                </div>


            </main>
        </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const cookies = nookies.get(context);
    const codekeyx = 'jcwn83nd12xnbbbe3y8793n3knqcuhg72m2c29';
    const codekeyz = cookies.jcwn83nd12xnbbbe3y8793n3knqcuhg72m2c29;
    const isAuth = codekeyx === codekeyz;
  
    if (isAuth) {
      return {
        redirect: {
          permanent: false,
          destination: '/null'
        }
      }
    }
  
    return { props: {} };
  }