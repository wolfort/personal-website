import React, {useState} from "react";
import { useSpring, animated } from "react-spring";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function Portfolio() {

    const props = useSpring({
        from: { opacity: 0, width: '100%' },
        to: { opacity: 1, width: '100%' }
        })

    return (
        <animated.div style={props}>
            <div class="portfolio-right-box">
                <h2 class="main-color tittle">Portfolio</h2>
                {/* <div className="portfolio-box"> */}
                {/* <div className="portfolio-list"> */}
                <AnimateSharedLayout>   
                    <motion.ul className="portfolio-list" layout initial={{ borderRadius: 25}}>
                        {items.map(item => (
                            <Item key={item} />
                        ))}
                    </motion.ul>
                </AnimateSharedLayout>
                {/* </div> */}
                {/* </div> */}
            </div>
        </animated.div>
    )

        
    
}

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li className="portfolio-box" layout onClick={toggleOpen} initial={{ borderRadius: 50 }}>
            <motion.div className="portfolio-box-top">
                <motion.div className="portfolio-circle" layout />
                <motion.h3 className="portfolio-name" layout>Proliders</motion.h3>
                <motion.p className="portfolio-desc" layout>Strona internetowa</motion.p>
            </motion.div>
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
}

function Content() {
    return (
        <motion.div className="portfolio-box-bottom"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 2 }}
            exit={{ opacity: 0, delay: 2 }}
        >
            <img src="assets/proliders.png" className="portfolio-img"></img>
            <button className="portfolio-button">WEJDŹ</button>
        </motion.div>
        );
    }

const items = [0, 1, 2];
