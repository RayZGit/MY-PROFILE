import Link from 'next/link'
import React from 'react'
import { icons } from 'react-icons'
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi"

function SocialIcons() {
    const socialLinks = [
        { name:"Github", icons: <FiGithub />, link: "https://www.github.com"},
        { name:"Linkedin", icons: <FiLinkedin />, link: "https://www.linkedin.com"},
        { name:"Twitter", icons: <FiTwitter />, link: "https://www.twitter.com"},
        { name:"Instagram", icons: <FiInstagram />, link: "https://www.instagram.com"},
        { name:"Youtube", icons: <FiYoutube />, link: "https://www.youtube.com"},
    ]
  return (
    <div className='social-icons'>
        <ul className='social-icons-list'>
            {
                socialLinks.map(({name, icons, link}) => (
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link' target='_blank'>
                            {icons}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialIcons