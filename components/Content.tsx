import React from 'react'
import Image from 'next/image'
import styles from '../styles/components/Content.module.css'
import about_dark from '../public/images/image-about-dark.jpg'
import about_light from '../public/images/image-about-light.jpg'


function Content() {
    return (
        <div>
            <div className={`${styles.content}`}>
                <div className={`${styles['content__container-image']}`}>
                    <Image src={about_dark} alt='image about light' layout='fill' />
                </div>

                <section className={`${styles.content__section}`}>
                    <h3>
                        About our furniture
                    </h3>

                    <p>
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </section>

                <div className={`${styles['content__container-image']}`}>
                    <Image src={about_light} alt='image about light' layout='fill' />
                </div>
            </div>
        </div>
    )
}

export default Content
