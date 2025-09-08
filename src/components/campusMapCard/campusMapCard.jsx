import { useEffect , useRef} from 'react'
import styles from './campusMapCard.module.css'
import Button from '../Button/Button.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const campusMapCard = ({ campusName, locationUrl, iframeUrl }) => {

    const card = useRef()

    useEffect(() => {
        gsap.fromTo(card.current,
            {
                opacity: 0.2,
                scale: 0.8,
            },
            {
                scale: 1,
                opacity: 1,
                scrollTrigger:{
                    trigger: card.current,
                    start: 'top 80%',
                    end: 'top 60%',
                    scrub: 2,
                    // markers: true
                }
            }
        )
    }, [])

    return (
        <div className={styles.card + " locationCard"} ref={card}>
            <h2 className={styles.campusName}>{campusName}</h2>
            <iframe
                src={iframeUrl}
                width="600" height="450" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" className={styles.iframe}></iframe>
            <Button title={'Open Map'} externalLink={locationUrl} extraStyles={styles.btn} />
        </div>
    )
}

export default campusMapCard
