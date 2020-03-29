import React, {useState} from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../css/navbar.module.css'
import {FaAlignRight} from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <h2 className={styles.logoHeader}><span className={styles.logoCustom}>JavaScript</span><span className={styles.logoSecondary}> will rule</span></h2>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon}/>
          </button>
        </div>

        <ul className={isOpen? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => {
            return <li key={index}><AniLink fade to={item.path}>{item.text}</AniLink></li>
          })}
        </ul>

        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index)=> {
            return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
