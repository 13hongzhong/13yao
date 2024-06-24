import React from 'react';
import { motion, useScroll } from "framer-motion";
import { useRef } from 'react';
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    
    const ref = useRef(null);
    
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto'>
           
           <LiIcon reference={ref} />
           
            <motion.div className='ml-12'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl md:text-3xl' style={{ color: '#c88671' }}>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/45'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full text-dark/65'>{info}</p>
            </motion.div>
        </li>
    );
};

const Filler = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto'>
            <div className='ml-12'>
                <h3 className='capitalize font-bold text-2xl md:text-3xl' style={{ color: '#c88671' }}>
                    {position}&nbsp;
                    
                </h3>
                <p className='font-medium w-full text-dark/65'>{work}</p>
            </div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });

    return (
        <div className="relative">
            <h2 className='font-bold text-7xl md:text-7xl lg:text-8xl mt-32 w-full text-center mt-4' style={{ color: '#d8b0a4' }}>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative mt-12'>
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                        backgroundColor: '#beebff',
                        transformOrigin: 'top'
                    }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
                />
                <div className='w-full md:w-5/7 mx-auto'>
                    <ul className="w-full flex flex-col items-start">
                        <Details
                            type='Bachelor of Science In Computer Science'
                            time='2020-2024'
                            place='University of Houston'
                            info='Relevant courses include Data Structures and Algorithms, Database Systems, and Data Science'
                        />
                        <Details
                            type='Bachelor of Science In Computer Science'
                            time='2020-2024'
                            place='University of Houston'
                            info='Relevant courses include Data Structures and Algorithms, Database Systems, and Data Science'
                        />
                        <Filler
                           position=''
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
