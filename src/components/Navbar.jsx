import { content } from '../Content';
import { MdMenu } from 'react-icons/md';
import { createElement, useState } from 'react';

const Navbar = () => {

    const { nav } = content;
    const [active, setActive] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    return <div className='w-full flex justify-center'>
        <div onClick={() => setShowMenu(!showMenu)} 
        className='sm:cursor-pointer top-10 left-10 fixed z-[999] rounded-lg bg-white/40 p-2'>
            <MdMenu size={34} />
        </div>
        <nav className={`fixed bottom-10 z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${showMenu ? 'bottom-48 md:bottom-10' : 'bottom-[-100%]'}`}>
            {
                nav.map((content, i) => (
                    <a href={content.link} key={i}
                        onClick={() => setActive(i)}
                        className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
                    ${i === active && 'bg-dark_primary text-white'}
                    `}>
                        {createElement(content.icon)}
                    </a>
                ))
            }
        </nav>
    </div>
}

export default Navbar;