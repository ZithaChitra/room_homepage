import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/images/logo.svg'
import styles from '../styles/components/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <header className={`${styles.nav}`}>
                <nav className='flex flex-jc-sb flex-ai-c'>
                    <div className={`${styles.nav__toggle} hide-for-desktop`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>


                    <div className='flex flex-ai-c' >

                        <Image src={logo} alt='logo' className={`${styles.nav__logo}`} />
                      
                        <div className={`${styles['nav__links-desktop']} hide-for-mobile`}>
                            <Link href='/'><a>Home</a></Link>
                            <Link href='/'><a>Shop</a></Link>
                            <Link href='/'><a>About</a></Link>
                            <Link href='/'><a>Contact</a></Link>
                        </div>

                    </div>
                    
                    <div className={`hide-for-desktop`}/>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
