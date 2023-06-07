import Image from 'next/image'
import styles from './page.module.css'
import Layout from './components/layout' 
import Hero from './components/hero'

// ---------making all imports above---------------------------
const Home = ()=> {
  return (
    <Layout>
<Hero/>

    </Layout>
  )
}

export default Home
