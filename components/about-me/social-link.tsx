import styles from "./social-link.module.css"

type Url = string
type LogoSrc = string
type LogoDesc = string
type DisplayText = string
interface Props {
  url: Url
  logo: LogoSrc
  alt: LogoDesc
  display: DisplayText
}
const SocialLink = ({ url, logo, alt, display }: Props) => {
  return (
    <a
      href={url}
      className={styles["social-link"]}
      target="_blank"
      rel="noreferrer"
    >
      <img alt={alt} src={logo}></img>
      <span>{display}</span>
    </a>
  )
}

export default SocialLink
