import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import {partners} from '../../../Mocks/partners';

import Heading from '@/components/Atoms/Heading';


export default function Slider() {
  return (<>
      <div className='px-80 py-10'>
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
    slidesPerView={5}  
    loop={true}   
 

    
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
            className='max-w-xs max-h-36'         
            
            
            />
          
  
        
      </SwiperSlide>
    ))}
   
   
  </Swiper>
    </section>
    </>
  );
}
