import styles from "./Home.module.css"
import Button from "../Button/Button"

const Home = () => {
  return (
    <section className={styles.HomeSection}> 
        <video src="./homeVideo.mp4" className={styles.HomeVideo} autoPlay loop muted></video>
        <div className={styles.homeContent}>
            <h1 className={styles.homeHead}>Building Bright Minds for a Brighter Tomorrow</h1>
            <p className={styles.homeCTA}>Welcome to our school website! A place to learn, grow, and build your future. Start your journey today.</p>
            <div className={styles.btnContainer}>
              <Button title="Enroll Now" internalLink="/admissionForm" extraStyles={styles.btn} />
            </div>
        </div>
    </section>
  )
}

export default Home
