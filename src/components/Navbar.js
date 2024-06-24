import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
import Logo from '../components/Logo.js';
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`} style={{ color: '#FFFFFF' }}>
            {title}
            <span 
                className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`} 
                style={{ backgroundColor: '#fff' }} 
            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative' style={{ backgroundColor: '#efcdc2' }}>
            <nav>
                <CustomLink href="/" title="&#10047; Home" className='mr-4' />
                <CustomLink href="/about" title="&#10047; About" className='mx-4' />
                <CustomLink href="/projects" title="&#10047; Projects" className='mx-4' />
                <CustomLink href="/illustrations" title="&#10047; Illustrations" className='ml-4' />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
                    <TwitterIcon style={{ fill: '#FFFFFF' }} />
                </motion.a>
                <motion.a href="https://github.com" target={"_blank"} className="w-6 mx-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                    <GithubIcon style={{ fill: '#FFFFFF' }} />
                </motion.a>
                <motion.a href="https://linkedin.com" target={"_blank"} className="w-6 ml-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                    <LinkedInIcon style={{ fill: '#FFFFFF' }} />
                </motion.a>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo style={{ color: '#FFFFFF' }} />
            </div>

            <div className="w-full h-[2px] absolute bottom-0 left-0" style={{ backgroundColor: '#fff' }}></div>
        </header>
    )
}

export default NavBar
