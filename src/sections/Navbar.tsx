import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'

type Props = {}

function Navbar({}: Props) {
  const sectionLinks = [
    {name: "About", link: "/#about"},
    {name: "Experience", link: "/#experience"},
    {name: "Work", link: "/#work"},
    {name: "Contact", link: "/#contact"}
  ]
  return (
    <nav>
        <div className='wrapper '>
          <div className='brand'>
            <Link href= "https://google.com">
              <Logo />
            </Link>
          </div>
          <div className='nav-items'>
            <ul className='nav-items-list'>
              {
                sectionLinks.map(({name, link}) => (
                  <li key={name} className='nav-items-list-item'>
                    <Link href={link} className='nav-items-list-item-link'>
                      {name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    </nav>
    

  )
}

export default Navbar