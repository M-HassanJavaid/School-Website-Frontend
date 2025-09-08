import { useRef, useEffect } from "react"
import styles from "./WhyUs.module.css"
import AchievementCard from "../AchievementCard/AchievementCard.jsx"
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger)

const WhyUS = () => {
    const WhyUsPara = useRef();
    const achievmentCardsContainer = useRef()

    useEffect(() => {
        gsap.fromTo(
            WhyUsPara.current,
            { backgroundPosition: "0% 0%" },   // fully black
            {
                backgroundPosition: "100% 100%", // fully white
                ease: "none",
                scrollTrigger: {
                    trigger: WhyUsPara.current,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: 3
                }
            }
        );
        
        let achievementCards = document.querySelectorAll('.achievementCard');

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: achievmentCardsContainer.current,
                start: 'top 80%',
                end: 'top 50%',
                scrub: 2,
                // markers: true
            }
        });

        tl.fromTo(achievementCards , 
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.5,
                scrub: 2
            }
        )

    }, []);



    return (
        <section className={styles.whyUsSection}>
            <h1 className={styles.whyUsHeading} >Why choose us?</h1>
            <p className={styles.WhyUsPara} ref={WhyUsPara}>At <span className={styles.schoolName}>Rab Nawaz English Grammar Secondary School</span>, we provide more than just an education—we create a safe,
                supportive, and inspiring environment where every child can thrive. With passionate teachers,
                modern learning resources, and a focus on both academic excellence and personal growth, we help
                students discover their strengths and prepare them for a bright future.</p>
            <h1 className={styles.achievementHeading} >What we Achieved?</h1>
            <div className={styles.achievementContainer} ref={achievmentCardsContainer}>
                <AchievementCard number={'24+'} icon={"fa-solid fa-clock"} text={"Years Of Experiences"} />
                <AchievementCard number={"10,000+"} icon={"fa-solid fa-graduation-cap"} text={"Students Taught"} />
                <AchievementCard number={121} icon={"fa-solid fa-handshake"} text={"Current Fellows"}  />
                <AchievementCard number={132} icon={"fa-solid fa-school"} text={"Schools Impacted"}  />
            </div>
        </section>
    )
}

export default WhyUS