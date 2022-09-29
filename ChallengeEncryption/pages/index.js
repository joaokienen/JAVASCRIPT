import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import nookies from 'nookies';
import { Init } from '../components/index/consts';

export default function Home() {
  return (
      <> 
        <Head>
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='googlebot' content='noindex, nofollow' />
          <meta name='author' content='Cybersecurity Team' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <title>CYBER: Semana de Segurança</title>
        </Head>

        <div className={styles.main0}>
            <main className={styles.main1}>
            <div className={styles.lab1}>
                <label className={styles.lab2}><Typewriter onInit={(typewriter) => {typewriter.typeString('Semana de Segurança da Informação').pauseFor(1000).deleteChars(10).typeString('Privacidade').deleteChars(11).typeString('Informação e Privacidade').start();}}options={{delay: 60}}/></label><br/>
                <label className={styles.lab3}><Typewriter onInit={(typewriter) => {typewriter.pauseFor(9000).typeString('Desafio de criptografia').deleteChars(15).typeString('atual: Criptografia').start();}}options={{delay: 30, cursor: ""}}/></label>
              </div>
              <div id='butt0' className={styles.butt0}>
                  <button className={styles.butt1} onClick={Init}>Iniciar {'->'}</button>
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