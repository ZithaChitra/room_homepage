import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/Heroe.module.css'
import heroe1 from '../public/images/mobile-image-hero-3.jpg'
import Navbar from '../components/Navbar'

export class Heroe extends Component {
    state = {
        image: heroe1
    }

    render() {
        return (
            <div className={`${styles.horoe}`}>
                <div className={`${styles['heroe__container-heroe']}`}>
                    <div className={`${styles['heroe__container-image']}`}>
                        <Image src={this.state.image} alt='heroe image' className={`${styles.image}`} layout='fill' />
                    </div>

                    <section className={`${styles.heroe__section}`}>
                        <h2>
                            Discover innovative ways to decorate
                        </h2>

                        <p>
                            We provide unmatched quality, comfort, and style for property owners across the country.
                            Our experts combine form and function in bringing your vision to life. Create a room in your
                            own style with our collection and make your property a reflection of you and what you love.
                        </p>

                        <Link href='/'>
                            <a>
                                Shop now
                            </a>
                        </Link>
                    </section>
                </div>
            </div>
        )
    }
}

export default Heroe
