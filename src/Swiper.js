import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper/core';
import image1 from "./Images/img/category-1.jpg";
import image2 from "./Images/img/category-2.jpg";
import image3 from "./Images/img/category-3.jpg";
import image4 from "./Images/img/category-4.jpg";
import image5 from "./Images/img/category-5.jpg";
import image6 from "./Images/img/category-6.jpg";
import image7 from "./Images/img/category-7.jpg";
import 'swiper/css/bundle';
import 'swiper/css/navigation';


SwiperCore.use([Navigation]);

const categories = [
  { image: image1, name: 'T-Shirt' },
  { image: image2, name: 'Bag' },
  { image: image3, name: 'Sandal' },
  { image: image4, name: 'Hat' },
  { image: image5, name: 'Shoe' },
  { image: image6, name: 'Belo' },
  { image: image7, name: 'Jenzo' }
];

export default function MySwiper() {
  return (
    <div className="swiper-container">
      <h1><span>Popular</span>Catagories</h1>
      <div className='swiper'>
      <Swiper
  slidesPerView={5}
  spaceBetween={10}
  navigation
  breakpoints={{
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  }}
>
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className='category'>
                <img src={category.image} alt='ok' />
                <h1>{category.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}