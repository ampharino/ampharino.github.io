import type { NextPage } from "next"
import Head from "next/head"
import AboutMe from "../components/about-me"
import HeroSection from "../components/hero-section"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ampharin Ongvises</title>
        <meta name="description" content="Ampharin Ongvises personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutMe />
    </div>
  )
}

export default Home
