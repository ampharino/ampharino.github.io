import styles from "./hero-message.module.css"

const HeroMessage = () => {
  return (
    <div className={styles["hero-message-container"]}>
      <div className={styles["hero-message"]}>
        <h1 className={styles.typewriter}>{"Ampharin Ongvises "}</h1>
      </div>
      <div className={styles["hero-subtitle"]}>
        <h3 className={styles["typewriter--subtitle"]}>
          {"Software Engineer in Bangkok"}
        </h3>
      </div>
    </div>
  )
}

export default HeroMessage
