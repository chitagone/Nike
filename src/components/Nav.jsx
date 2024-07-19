import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {

    const [isMenuOpen,setisMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setisMenuOpen(!isMenuOpen);
       
    }
  return (
    <header className='padding-x py-8 absolute x-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 

                    src={headerLogo}
                    alt='Logo'
                    width={130}
                    height={29}
                
                
                
                />
            </a>

            <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
                {navLinks.map((item) =>(
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray hover:'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}

            </ul>

            
            <div className='hidden max-lg:block'>
                <button onClick={toggleMenu}>
                <img src={hamburger} 
                    width={25}
                    height={25}
                 />

                </button>
                
            </div>


          

        </nav>


        {isMenuOpen ?  <div className='hidden max-lg:flex  justify-end items-center
        flex-col gap-9  h-[50vh] '>
            {navLinks.map((item) =>(
                    <li key={item.label} className='list-none'>
                        <a 
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray hover:'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}

                    
            </div>:null}

       

    </header>
  )
}

export default Nav