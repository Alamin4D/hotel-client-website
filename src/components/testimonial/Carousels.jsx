// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules'
import Slide from './Slide'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Carousels() {
    const [review, setReview] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/reviews`);
                setReview(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(review);
    return (
        <div className='container py-10 mx-auto'>
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                cssMode={true}
                className="mySwiper"
            >
                {review.map(reviews => (<SwiperSlide
                    key={reviews._id}>
                    <Slide
                        img={reviews.image}
                        image={reviews.image}
                        name={reviews.Room_Name}
                        comment_text={reviews.comment_text}
                        rating={reviews.rating}
                        title={reviews.title}
                    />
                </SwiperSlide>))}
            </Swiper>
        </div>
    )
}