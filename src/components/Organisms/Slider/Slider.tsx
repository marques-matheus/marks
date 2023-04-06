import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import {partners} from '../../../../public/partners';

import Heading from '@/components/Atoms/Heading';


export default function Slider() {
  return (<>
      <div className='px-2 mx-auto lg:px-4 xl:px-32 2xl:px-80 py-10'>
        <Heading text="Nossos parceiros" />
      </div>
  <section className='p-8 bg-gray-100'  id="partners">
  <Swiper
    
    spaceBetween={50}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    
    loop={true}
    breakpoints={{
      0:{
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    }}   

    
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
   

    {partners.map((partner) => (
      <SwiperSlide style={{
       filter: 'grayscale(100%)',
       opacity: 0.5,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

       
      }}  key={partner.id}>
        
          <img 
            src={partner.img}
            alt={partner.name}
            className='max-w-xs max-h-36 w-20 sm:w-28 lg:w-32 '         
            
            
            />
          
  
        
      </SwiperSlide>
    ))}
   
   
  </Swiper>
    </section>
    </>
  );
}
