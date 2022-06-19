import styles from "./scroll-down-button.module.css"

const ScrollDownButton = () => {
  const scrollToAboutMe = () => {
    document
      .querySelector("#about-me-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div
      className={styles["scroll-down"]}
      // * Import the svg inline so the fill can be styled dynamically
      dangerouslySetInnerHTML={{
        __html: require("../../public/circle-chevron-down-solid.svg?include"),
      }}
      onClick={scrollToAboutMe}
    ></div>
  )
}

export default ScrollDownButton
