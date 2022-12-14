import { content } from '../Content';

const Services = () => {

  const { services } = content;

  return <section>
    <div className='md:container px-5 py-14' id='services'>
      <h2
      data-aos="fade-down" 
      className='title'>{services.title}</h2>
      <h4
      data-aos="fade-down" 
      className='subtitle'>{services.subtitle}</h4>
      <br />
      <div className='flex gap-5 justify-between flex-wrap group'>
        {
          services.service_content.map((content, i) => (
            <div key={i}
            data-aos="fade-up"
            data-aos-delay={i * 300}
              className='min-w-[14rem] duration-300 cursor-pointer border-2 rounded-xl text-center bg-bg_light_primary p-6 border-slate-200 flex-1 group-hover:blur-sm hover:!blur-none'>
              <img src={content.logo} alt="" className='mx-auto' />
              <h6 className='my-3'>{content.title}</h6>
              <h6 className='leading-7'>{content.para}</h6>
            </div>
          ))
        }
      </div>
    </div>
  </section>;
};

export default Services;
