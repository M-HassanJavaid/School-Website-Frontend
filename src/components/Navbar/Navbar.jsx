import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Menu from '../hamburgerMenu/menu.jsx'
import { useState , useEffect } from "react"

const Navbar = () => {

  const [IsNavOpen, setIsNavOpen] = useState(false)
  const [IsScreenBig , setIsScreenBig] = useState(window.innerWidth > 795)

  useEffect(() => {
    window.addEventListener('resize' , ()=>{
      setIsScreenBig(window.innerWidth > 795)
    })
  }, [])
  

  return (
    <nav className={styles.navbar} style={IsScreenBig ? {height: '100px'} : IsNavOpen ? {height: '280px'} : {height: '80px'}}>
        <div className={styles.logoContainer}>
            <img src="./logo.webp" alt="" className={styles.logo} />
        </div>
        <ul className={styles.navLinkContainer}>
            {!IsScreenBig && <Menu setIsNavOpen={setIsNavOpen} IsNavOpen={IsNavOpen}/>}
            <li className={styles.navLinks}><Link to="/">Home</Link></li>
            <li className={styles.navLinks}><Link to="/ContactUs">Contact Us</Link></li>
            <li className={styles.navLinks}><Link to="/campuses">Our Campuses</Link></li>
            <Button title='Apply for Admission' internalLink="/admissionForm" extraStyles={styles.btn} />
        </ul>
    </nav>
  )
}

export default Navbar
