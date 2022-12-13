import { content } from '../Content';
import email from '../assets/images/Contact/gmail.png';
import whatsApp from '../assets/images/Contact/whatsapp.png';
import linkedin from '../assets/images/Contact/linkedin.png';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import { useRef } from 'react';

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.EMAILJSId,
        import.meta.env.EMAIL_PRIVATE_KEY, form.current,
        import.meta.env.EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {
              Contact.social_media.map((media, i) => (
                <div key={i} className='flex items-center gap-4 '>
                  {
                    i === 0 ? <img className='w-8' src={email} alt="" /> : i === 1 ? <img className='w-8' src={whatsApp} alt="" /> : i === 2 ? <img className='w-8' src={linkedin} alt="" /> : <></>
                  }
                  <a className='font-Poppins text-white my-2' href={media.link} target='_blank'>{media.text}</a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
