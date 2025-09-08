import styles from './AchievementCard.module.css'
import gsap from 'gsap'

const Achievements = ({ number, text, icon }) => {

  function animateOnHover(e) {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      transform: "perspective(600px) rotateY(15deg) rotateX(10deg) scale(1.05)",
      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
    })
  }


  function resetCard(e) {
    gsap.to(e.currentTarget , {
      duration: 0.3,
      transform: "perspective(0px) rotateY(0deg) rotateX(0deg) scale(1)",
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0.3)"
    })
  }

    return (
      <div className={`${styles.card} achievementCard`} onMouseEnter={animateOnHover} onMouseLeave={resetCard}>
        <i className={`${icon} ${styles.icon}`}></i>
        <h2 className={styles.number}>{number}</h2>
        <p className={styles.para}>{text}</p>
      </div>
    )
  }

  export default Achievements