// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/about-5.jpg'
import bgimg2 from '../assets/images/about-4.jpg'
import bgimg3 from '../assets/images/about-6.jpg'

export default function Carousel() {
    return (
        <div className='container py-10 mx-auto'>
            {/* <h3>my</h3> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}