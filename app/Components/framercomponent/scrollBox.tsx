'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollBox = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const scaleY = useTransform(scrollYProgress, [1, 0], [1, 0])

    return (
        <div className='relative w-8 h-8 rounded-lg border bg-gradient-to-b to-indigo-600 from-emerald-400 border-gray-300 overflow-hidden'>
            <motion.div
                ref={ref}
                className='absolute bottom-0 left-0 w-full h-full  bg-gradient-to-b from-indigo-900 to-emerald-500 origin-bottom'
                style={{ scaleY: scaleY }}
            />
        </div>
    )
}

export default ScrollBox
