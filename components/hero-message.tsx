import styles from "./hero-message.module.css"

const HeroMessage = () => {
  return (
    <div className={styles["hero-message-container"]}>
      <div className={styles["hero-message"]}>
        <h1 className={styles.typewriter}>
          {"Hello! I'm Amp "}
          <span className={styles["wave-emoji"]}>👋 </span>
        </h1>
      </div>
      <div className={styles["hero-content"]}>
        {
          "I'm a Software Developer currently based in Bangkok. I'm somewhat of a specialist in being a generalist, having worked with a wide variety of tools and technologies such as React / Vue / Javascript / Typescript / Java / Kotlin / Python / C#. React is probably my favorite though."
        }
      </div>
    </div>
  )
}

export default HeroMessage
