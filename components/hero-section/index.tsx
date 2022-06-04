import HeroImage from "./hero-image"
import HeroMessage from "./hero-message"
import styles from "./hero-section.module.css"
import ScrollDownButton from "./scroll-down-button"
const HeroSection = () => {
  return (
    <div className={styles["hero-section"]}>
      <HeroMessage />
      <HeroImage />
      <ScrollDownButton />
    </div>
  )
}

export default HeroSection
