import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';


import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-coverflow'; // Import Swiper coverflow effect styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/navigation'; // Import Swiper navigation styles

import 'swiper/css/effect-cards'; // Import Swiper cards effect styles




const Ratings = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ratings')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-10">
                <h2 className="text-2xl">Trusted Brands</h2>
                <h2 className="text-4xl font-bold">Trust by <span className="text-6xl font-bold text-pink-400">1500+</span> Couples</h2>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    ratings.map(rating => <SwiperSlide className='' key={rating._id} >

                        <div className='flex gap-5 items-center max-w-md mx-auto h-96'>
                            <div className='flex-1'>
                                <img className=' object-fill rounded-xl shadow-2xl' src={rating.image} alt="" />
                            </div>
                            <div className='flex-1 space-y-3'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating.reviewStar}
                                    readOnly
                                />
                                <h2>Marriage  Date: <span className='text-pink-400'>{rating.marriageDate}</span></h2>
                                <p className="text-lg font-bold text-justify italic">{rating.successStoryText}</p>
                            </div>
                        </div>


                    </SwiperSlide>)
                }


            </Swiper>


        </div>
    );
};

export default Ratings;