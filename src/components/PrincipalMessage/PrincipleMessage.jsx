import { useEffect, useRef } from 'react'
import styles from './PrincipalMessage.module.css';
import gsap from "gsap"
import scrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(scrollTrigger)


const PrincipleMessage = () => {
    const firstComma = useRef();
    const secondComma = useRef();
    const messageHeading = useRef();

    useEffect(() => {
        gsap.fromTo(firstComma.current,
            {
                top: '-75px',
                left: '35px'
            },
            {
                top: window.innerWidth < 700 ? ' -28px' :  '-20px',
                left: window.innerWidth < 700 ? '-5px' : '80px',
                scrollTrigger: {
                    trigger: messageHeading.current,
                    start: 'top 50%',
                    end: 'top 40%',
                    scrub: 3,
                    // markers: true
                }
            }
        );

    //    left: -5px;
    // top: -28px

        gsap.fromTo(secondComma.current,
            {
                bottom: "-65px",
                right: "35px"
            },
            {
                bottom:  window.innerWidth < 700 ? "-20px" :  "-10px",
                right: window.innerWidth < 700 ? "15px" : "80px",
                scrollTrigger: {
                    trigger: messageHeading.current,
                    start: 'top 50%',
                    end: 'top 40%',
                    scrub: 3,
                    // markers: true
                }
            }
        );
    }, []);


    return (
        <section className={styles.PrincipleMessage} >
            <h1 className={styles.PrincipleMessageHeading} ref={messageHeading}> Message From Principle </h1>
            <div className={styles.imgContainer}>
                <img src="./principle.webp" alt="" />
            </div>
            <div className={styles.messageContainer}>
                <img src="./quote1.svg" alt="invertedComma1" className={styles.invertedComma1} ref={firstComma} />
                <img src="./quote1.svg" alt="invertedComma2" className={styles.invertedComma2} ref={secondComma} />
                <div className={styles.message}>
                    At our school, we believe that education is not just about books and classrooms, but about shaping young minds to become kind, confident,
                    and responsible individuals. Every child carries unique talents and abilities, and it is our mission to nurture them with care, guidance,
                    and the right opportunities.
                </div>
                <div className={styles.message}>
                    We take pride in creating a safe, supportive, and inspiring environment where students can learn, grow, and dream big. With the support of our
                    dedicated staff and the trust of parents, we continue to prepare our students for a bright future filled with knowledge, values, and success.
                </div>
            </div>
        </section>
    )
}

export default PrincipleMessage
