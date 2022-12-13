import { content } from '../Content';
import arrow from '../assets/images/Skills/fast-forward.png';
import Modal from 'react-modal';
import { useState } from 'react';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "23rem",
    width: '90%'
  },
  overlay: {
    padding: "2rem",
  }

};

Modal.setAppElement('#root');



const Skills = () => {

  const { skills } = content;

  const [modalIsOpen, setIsOpen] = useState(false);

  const [selectSkills, setSelectSkills] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <section className='min-h-fit bg-bg_light_primary' id='skills'>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className='flex items-center gap-2'>
        <img className='w-10' src={selectSkills.logo} alt="" />
        <h6>{ selectSkills.name }</h6>
      </div>
      <br />
      <ul className='list-decimal px-4 font-Poppins sm:text-sm text-xs !lending-7 '>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repudiandae?</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id quia eligendi.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
      </ul>
      <br />
      <div className='flex justify-end'>
        <button onClick={closeModal} className='btn'>
            Close
        </button>
      </div>
    </Modal>

    <div className='md:container px-5 py-14'>
      <h2 
      data-aos="fade-down"
      className='title '>{skills.title}</h2>
      <h4
      data-aos="fade-down" 
      className='subtitle'>
        {skills.subtitle}
      </h4>
      <br />
      <div className='flex flex-wrap gap-4 justify-center'>
        {
          skills.skills_content.map((skill, i) => (
            <div key={i}
            data-aos="fade-up"
            data-aos-delay={200} 
            className='bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200'>
              <div >
                <img className='w-10 group-hover:scale-125 duration-200' src={skill?.logo} alt="" />
              </div>
              <div>
                <h6>
                  {skill.name}
                </h6>
                <p className='italic'>
                  {skill.para}
                </p>
                <div onClick={() => {
                  setSelectSkills(skill);
                  openModal();
                }} className='text-xl absolute top-3 right-3'>
                  {
                    <img src={arrow} className='w-4' alt='' />
                  }
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>

  </section>;
};

export default Skills;
