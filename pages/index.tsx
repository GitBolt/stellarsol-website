import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { DefaultHead } from '@/layouts/Head'
import uppermesh from '@/images/uppermesh.svg'
import { Navbar } from '@/layouts/Navbar'


export default function Home() {
  return (
    <div className={styles.main}>
      <DefaultHead />
      <Navbar/>
      <Image src={uppermesh} alt="uppermesh"/>
    </div>
  )
}
