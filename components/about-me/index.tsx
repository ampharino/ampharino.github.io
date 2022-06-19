import styles from "./about-me.module.css"
import SocialLink from "./social-link"

const AboutMe = () => {
  return (
    <section id="about-me-section" className={styles["about-me"]}>
      <div className={styles.container}>
        <h2 className={styles.title}>About me</h2>
        <p className={styles.description}>
          {`Hi there! I'm Ampharin or Amp for short

          I'm a Fullstack Software Engineer currently based in Thailand with experience in a variety of different tech stacks. Working with React, Typescript and NodeJS is where I'm most comfortable. I love learning and sharing new things, whether it be about software development, rock climbing or personal finance.

          Outside of coding, my interests are: video games, tv shows, mechanical keyboards, rock climbing
          `}
        </p>
        <SocialLink
          logo="/linkedin-brands.svg"
          alt="linkedin"
          url="https://www.linkedin.com/in/ampharino/"
          display="Linkedin"
        />
        <SocialLink
          logo="/github-square-brands.svg"
          alt="github"
          url="https://www.github.com/ampharino/"
          display="Github"
        />
      </div>
    </section>
  )
}

export default AboutMe
