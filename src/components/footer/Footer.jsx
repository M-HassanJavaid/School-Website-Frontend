import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerSubContainer}>
        <li className={styles.footerSubHead}>Follow Us</li>
        <li className={styles.footerElem}><a href="#">Youtube</a></li>
        <li className={styles.footerElem}><a href="#">Facebook</a></li>
        <li className={styles.footerElem}><a href="#">Instagram</a></li>
      </ul>
      <ul className={styles.footerSubContainer}>
        <li className={styles.footerSubHead}>Our Branches</li>
        <li className={styles.footerElem}><a href="https://maps.app.goo.gl/VHPsLkhsrMgqemFw5" target='_blank'>Landhi 36-G</a></li>
        <li className={styles.footerElem}><a href="https://maps.app.goo.gl/KHYmh2JhUKqiYZ7M8" target='_blank'>Ilyas Goth</a></li>
        <li className={styles.footerElem}><a href="https://maps.app.goo.gl/6GbjhCeUqr83mtop6" target='_blank'>51-B</a></li>
      </ul>
      <ul className={styles.footerSubContainer}>
        <li className={styles.footerSubHead}>Phone</li>
        <li className={styles.footerElem}>0312347891</li>
        <li className={styles.footerElem}>0312347891</li>
        <li className={styles.footerElem}>0312347891</li>
      </ul>
      <ul className={styles.footerSubContainer}>
        <li className={styles.footerSubHead}>Email</li>
        <li className={styles.footerElem}><a href="mailto:dummy@gmail.com">dummy@gmail.com</a></li>
      </ul>
      <div className={styles.footerCopyRights}>
        © {new Date().getFullYear()} <a href="http://hassanjavaid.netlify.app" target="_blank">Hassan Javaid</a> — Built & maintained by Hassan Javaid. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
