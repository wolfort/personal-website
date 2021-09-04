import React from "react";
import { useSpring, animated } from "react-spring";
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                        <div className="portfolio-shape-left">
                            <motion.a whileHover={{ scale: 1.05 }} href="https://www.proliders.pl/"><LazyLoadImage effect="blur" className="portfolio-img" src="assets/proliders.png"/></motion.a>
                        </div>
                        <div className="portfolio-text-right">
                            <h3>Proliders</h3>
                            <p>Strona została wykonana za pomocą React'a. Firma zajmuje się kompleksowym myciem i decynfekcją zakładów przetwórstwa spożywczego.</p>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="portfolio-text-left">
                            <h3>Mighty Five</h3>
                            <p>Realizacja transmisji na żywo.<br></br>Przez około rok zajmowałem się realizacją transmisji z wydarzeń esportowych. Korzystałem głównie z programu vMix.</p>
                        </div>
                        <div className="portfolio-shape-right">
                            <motion.a whileHover={{ scale: 1.05 }} href="https://youtu.be/OK4-Do_owAY?t=302"><LazyLoadImage effect="blur" whileHover={{ scale: 1.05 }} className="portfolio-img" src="assets/mve-stream.png"/></motion.a>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="portfolio-shape-left">
                            <motion.a whileHover={{ scale: 1.05 }} href="https://www.facebook.com/ativarteam"><LazyLoadImage effect="blur" whileHover={{ scale: 1.05 }} className="portfolio-img" src="assets/ativar.png"/></motion.a>
                        </div>
                        <div className="portfolio-text-right">
                            <h3>Ativar</h3>
                            <p>Tworzenie oprawy graficznej.<br></br>Na początku 2019 roku zajmowałem się tworzeniem grafik dla pewnej organizacji esportowej. Korzystałem głównie z programu Adobe Photoshop.</p>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    )

        
    
}
