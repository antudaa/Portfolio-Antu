import { content } from "../Content";

const HireMe = () => {
  const { HireMe } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {HireMe.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {HireMe.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={HireMe.image1}
            alt="..."
            data-aos="fade-up"
            className="max-w-sm md:block hidden"
          />
          <img
            src={HireMe.image1}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-down"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{HireMe.para}</p>
            <br />
            <a href="#contact" className="btn bg-dark_primary text-white">
              {HireMe.btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;