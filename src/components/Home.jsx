import React from 'react'
import { motion } from 'framer-motion';
import { useSpring, animated } from "react-spring";


export default function Home() {

    const props = useSpring({
        from: { opacity: 0, width: '100%' },
        to: { opacity: 1, width: '100%' }
        })


    return (
            <animated.div style={props}>
                <div className="home-right">
                    <motion.div className="name-span">
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">S</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">E</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">B</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">A</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">S</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">T</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">I</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">A</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter" style={{ marginRight: 10 }}>N</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">W</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">I</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">L</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">C</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">Z</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">Y</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">Ń</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">S</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">K</motion.div>
                        <motion.div whileHover={{ scale: 1.2 }} className="letter">I</motion.div>
                    </motion.div>
                        {/* <h2 className="name-right-box">Sebastian Wilczyński</h2> */}
                        <motion.h3 className="desc-right-box">Junior Frontend Developer</motion.h3>
                </div>
            </animated.div>
    )
}
