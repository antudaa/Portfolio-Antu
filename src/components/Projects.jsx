import { content } from '../Content';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';


const Projects = () => {

  const { Projects } = content;

  return <section className='bg-bg_light_primary' id='projects'>
    <div className='md:container px-5 pt-14 min-h-screen flex flex-col justify-between'>
      <div>
        <h2
          data-aos="fade-down"
          className='title'>{Projects.title}</h2>
        <h4
          data-aos="fade-down"
          className='subtitle'>{Projects.subtitle}</h4>
        <br />
      </div>
      <div className='flex items-center lg:flex-row flex-col-reverse gap-5'>
        <img
          data-aos="fade-down"
          src={Projects.image} alt="" className='max-w-[45vw] min-w-[22rem]' />
        <Swiper
          pagination={{
            clickable: true,
          }}
          data-aos="fade-down"
          spaceBetween={20}
          modules={[Pagination]}
          className='rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start'
        >{
            Projects.project_content.map((content, i) => (
              <SwiperSlide key={i}
                className='bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit'>
                <img src={content.image} alt="" className='w-[350px] h-80' />
                <div className='flex flex-col gap-1 mt-2'>
                  <h5 className='font-bold text-gray font-Poppins'>
                    {content.title}
                  </h5>
                  <div className='flex justify-between'>
                    <a href={content.code} target="_blank" className='font-bold self-start '>
                      Github Code
                    </a>
                    <a href={content.live} target="_blank" className='font-bold self-end '>
                      Live Site
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }

          ...
        </Swiper>

      </div>
    </div>
  </section>;
};

export default Projects;
