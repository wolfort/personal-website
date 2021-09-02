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
                <div className="portfolio-box">
                    <div className="portfolio-content">
                        <img className="portfolio-img" src="assets/proliders.png"></img>
                        <h3>Proliders</h3>
                        <p>Strona internetowa</p>
                    </div>
                    <div className="portfolio-content">
                        <img className="portfolio-img" src="assets/proliders.png"></img>
                        <h3>Proliders</h3>
                        <p>Strona internetowa</p>
                    </div>
                    <div className="portfolio-content">
                        <img className="portfolio-img" src="assets/proliders.png"></img>
                        <h3>Proliders</h3>
                        <p>Strona internetowa</p>
                    </div>
                </div>
            </div>
        </animated.div>
    )

        
    
}
