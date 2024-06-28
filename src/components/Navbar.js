import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TwitterIcon, GithubIcon, LinkedInIcon } from './Icons';
import Logo from '../components/Logo.js';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '', onClick }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`} style={{ color: '#FFFFFF' }} onClick={onClick}>
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'
          }`}
        style={{ backgroundColor: '#fff' }}
      >&nbsp;</span>
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative' style={{ backgroundColor: '#efcdc2' }}>
      <button className="flex-col justify-center items-center lg:hidden absolute top-1/2 -translate-y-1/2 left-8 z-50" onClick={handleClick}>
        <span className={`dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className={`w-full lg:flex lg:items-center lg:justify-between ${isOpen ? 'hidden lg:flex' : 'hidden'}`}>
        <nav className="flex flex-col lg:flex-row lg:items-center">
          <CustomLink href="/" title="&#10047; Home" className='lg:mr-4' onClick={handleClick} />
          <CustomLink href="/skills" title="&#10047; Skills" className='lg:mx-4' onClick={handleClick} />
          <CustomLink href="/projects" title="&#10047; Projects" className='lg:mx-4' onClick={handleClick} />
          <CustomLink href="/illustrations" title="&#10047; Illustrations" className='lg:ml-4' onClick={handleClick} />
        </nav>

        <nav className="flex items-center justify-center mt-4 lg:mt-0">
          <motion.a href="https://twitter.com/13hongzhong" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
            <TwitterIcon style={{ fill: '#FFFFFF' }} />
          </motion.a>
          <motion.a href="https://github.com/13hongzhong" target="_blank" className="w-6 mx-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <GithubIcon style={{ fill: '#FFFFFF' }} />
          </motion.a>
          {/* <motion.a href="https://linkedin.com" target="_blank" className="w-6 ml-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
          <LinkedInIcon style={{ fill: '#FFFFFF' }} />
          </motion.a> */}

        </nav>
      </div>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo style={{ color: '#FFFFFF' }} />
      </div>

      <div className="w-full h-[2px] absolute bottom-0 left-0" style={{ backgroundColor: '#fff' }}></div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={handleClick}></div>
      )}
      <div className={`fixed top-0 left-0 h-full bg-[#efcdc2] z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`} style={{ width: '55%' }}>
        <button className="absolute top-5 left-10 text-2xl text-white z-50" onClick={handleClick}>
          X
        </button>

        <nav className="flex flex-col items-center mt-20 space-y-6">
          <CustomLink href="/" title="&#10047; Home" onClick={handleClick} />
          <CustomLink href="/skills" title="&#10047; Skills" onClick={handleClick} />
          <CustomLink href="/projects" title="&#10047; Projects" onClick={handleClick} />
          <CustomLink href="/illustrations" title="&#10047; Illustrations" onClick={handleClick} />
        </nav>

        <nav className="flex items-center justify-center mt-8">
          <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <TwitterIcon style={{ fill: '#FFFFFF' }} />
          </motion.a>
          <motion.a href="https://github.com" target="_blank" className="w-6 mx-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <GithubIcon style={{ fill: '#FFFFFF' }} />
          </motion.a>
          <motion.a href="https://linkedin.com" target="_blank" className="w-6 mx-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <LinkedInIcon style={{ fill: '#FFFFFF' }} />
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
