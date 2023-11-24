// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';




const Ratings = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        fetch('ratings.json')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-2xl">Trusted Brands</h2>
                <h2 className="text-4xl font-bold">Trust by <span className="text-6xl font-bold text-pink-400">1500+</span> Couples</h2>
            </div>

            <Swiper
                // effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                // coverflowEffect={{
                //     rotate: 50,
                //     stretch: 0,
                //     depth: 100,
                //     modifier: 1,
                //     slideShadows: true,
                // }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    ratings.map(rating => <SwiperSlide className='' key={rating._id} >

                        <div className='m-24'>
                            <img className='w-52' src={rating.image} alt="" />
                            <h2>marrage date: {rating.marriageDate}</h2>
                            <p>{rating.successStoryText}</p>
                        </div>

                        
                    </SwiperSlide>)
                }


            </Swiper>


        </div>
    );
};

export default Ratings;