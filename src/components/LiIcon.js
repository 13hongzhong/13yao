import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })

    return (
        <figure className='absolute left-0'>
            <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-[1px] fill-none' style={{ stroke: '#efcdc2' }} />
                <motion.circle
                    cx="75"
                    cy="50"
                    r="20"
                    className='stroke-[5px] fill-light'
                    style={{
                        pathLength: scrollYProgress,
                        stroke: '#d8b0a4'
                    }}
                />
                <circle cx="75" cy="50" r="10" className='animate-pulse' style={{ fill: '#f9b2b2', stroke: '#efcdc2' }} />
            </svg>
        </figure>
    )
}

export default LiIcon
