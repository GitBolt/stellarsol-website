import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { DefaultHead } from '@/layouts/Head'
import uppermesh from '@/images/uppermesh.svg'
import { Navbar } from '@/layouts/Navbar'


export default function Home() {
  return (
    <div className={styles.main}>
      <DefaultHead />
      <Navbar />
      <div className={styles.uppermesh}>
        <Image
          src={uppermesh}
          alt="StellarSOL Logo"
          width="100%"
          height="100%"
          layout='fill'
        />
      </div>
      <div className={styles.upper}>
        <h1>
          Shop on your favourite online stores with Solana
        </h1>
        <a className={styles.button} href="#">
          <div>
            <p>
              Add to Chrome 
              <span>It&apos;s completetly free</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
