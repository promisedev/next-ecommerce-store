import Image from 'next/image'
import styles from '../styles/layout.module.css'
import Footer from "./footer"
 const Layout=({children})=> {
  return (
    <main className={styles.main}>
      {children}
      <Footer/>
    </main>
  )
}

export default  Layout