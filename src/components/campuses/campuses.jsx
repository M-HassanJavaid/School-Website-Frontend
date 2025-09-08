import { useEffect } from 'react'
import styles from './campuses.module.css'
import CampusMapCard from '../campusMapCard/campusMapCard.jsx'
import gsap from "gsap"

const Campuses = () => {


    return (
        <section className={styles.campusesSection}>
            <h1 className={styles.heading}>Our Campuses</h1>
            <div className={styles.cardContainer}>
                <CampusMapCard campusName='Landhi 36-G' locationUrl="https://maps.app.goo.gl/VHPsLkhsrMgqemFw5"
                    iframeUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.691798379784!2d67.169631!3d24.8402114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a68ec611d0f%3A0x5bcb6ddc1ec735b5!2sRabnawaz%20English%20School!5e0!3m2!1sen!2s!4v1757057367015!5m2!1sen!2s"
                />
                <CampusMapCard campusName='Ilyas Goth' locationUrl="https://maps.app.goo.gl/KHYmh2JhUKqiYZ7M8"
                    iframeUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14484.844988656618!2d67.1779928!3d24.8224484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b4685a1e7ed%3A0xd4d26bfbee437f0f!2sRab%20Nawaz%20English%20Grammar%20Secondary%20School!5e0!3m2!1sen!2s!4v1757081961479!5m2!1sen!2s"
                />
                <CampusMapCard campusName='51 B' locationUrl="https://maps.app.goo.gl/6GbjhCeUqr83mtop6"
                    iframeUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d226.3295503549987!2d67.17670263770817!3d24.820342564265346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ5JzEzLjciTiA2N8KwMTAnMzcuMSJF!5e0!3m2!1sen!2s!4v1757082245959!5m2!1sen!2s"
                />

            </div>
        </section>
    )
}

export default Campuses