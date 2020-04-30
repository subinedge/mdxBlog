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
          <AniLink to="/" fade aria-label="Blog logo" className={styles.logoLink}>
            <h2 className={styles.logoHeader}><span className={styles.logoCustom}>JavaScript</span><span className={styles.logoSecondary}> will rule</span></h2>
          </AniLink>
          <button type="button" aria-label="mobile nav hamburger icon" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.toggleIcon}/>
          </button>
        </div>

        <ul className={isOpen? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => {
            return <li key={index}><AniLink fade to={item.path} aria-label="menu links on navbar">{item.text}</AniLink></li>
          })}
        </ul>

        <div  className={isOpen? `${styles.navLinks} ${styles.showNavSocial}` : `${styles.navLinks}`}>
          {socialIcons.map((item, index)=> {
            return <a key={index} aria-label="social media icons on navbar" href={item.url} target="_blank" title={item.title} rel="noopener noreferrer">
              {item.icon}
            </a>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
