import HeroImage from "./hero-image"
import HeroMessage from "./hero-message"
import styles from "./hero-section.module.css"
const HeroSection = () => {
  return (
    <div className={styles["hero-section"]}>
      <HeroMessage />
      <HeroImage />
    </div>
  )
}

export default HeroSection
