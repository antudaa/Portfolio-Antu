import { content } from '../Content'
import resume from '../assets/images/Resume/ANTU RESUME.pdf';
import Typewriter from 'typewriter-effect';

const Hero = () => {

  const { hero } = content;

  return <section>

    <div className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center' id='home'>
      <div
        data-aos="slide-down"
        data-aos-delay="1200"
        className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10'>
        <h1 className='rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]'>
          {hero.firstName}{" "}
          <span className='text-dark_primary'>
            {hero.LastName}
          </span>
        </h1>
      </div>
      <div className='pb-16 px-6 pt-5'
        data-aos="fade-down"
      >
        <h2>
          <Typewriter
            options={{
              strings: ['Web Developer', 'Front End Developer', 'Back End Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <br />
        <div className='flex justify-end'>
          <a href={resume} className='btn' variant="contained" download>{hero.btnText}</a>
        </div>
        <div className='flex flex-col gap-10 mt-10'>
          {hero.hero_content.map((content, i) => (
            < div key={i}
              data-aos="fade-delay"
              data-aos-delay={i * 300}
              className={`flex items-center w-80 gap-5 ${i === 1 && 'flex-row-reverse text-right'}`}>
              <h3>{content.count}</h3>
              <p>{content.text}</p>
            </div>
          ))
          }
        </div>
      </div>
      <div className='md:h-[37rem] h-96'>
        <img
          data-aos="slide-up"
          className='h-full object-cover' src={hero.image} alt="" />
      </div>
    </div>
  </section >
    ;
};

export default Hero;
