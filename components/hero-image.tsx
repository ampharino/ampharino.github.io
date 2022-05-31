import styles from "./hero-image.module.css"

const HeroImage = () => {
  return (
    <div className={styles["hero-img"]}>
      <img src="/developer.svg" alt="developer"></img>
    </div>
  )
}

export default HeroImage
