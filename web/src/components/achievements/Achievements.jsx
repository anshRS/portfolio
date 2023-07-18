import React from 'react'
import './achievements.css'
import { Data } from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Achievements = () => {
    return (
        <section className="achievement container section" id='achievements'>
            <h2 className="section__title">Achievements</h2>
            <span className="section__subtitle">My achievements</span>

            <Swiper className="achievement__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {
                    Data.map(({ id, image, title, description }) => {
                        return (
                            <SwiperSlide key={id} className='achievement__card'>
                                <img src={image} alt="" className='achievement__img' />

                                <h3 className="achievement__name">{title}</h3>
                                <p className="achievement__description">{description}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Achievements
