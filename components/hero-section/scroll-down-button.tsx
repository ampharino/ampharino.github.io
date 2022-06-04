import styles from "./scroll-down-button.module.css"

const ScrollDownButton = () => {
  return (
    <div
      className={styles["scroll-down"]}
      dangerouslySetInnerHTML={{
        __html: require("../../public/circle-chevron-down-solid.svg?include"),
      }}
    ></div>
  )
}

export default ScrollDownButton
