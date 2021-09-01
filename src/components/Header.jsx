import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { motion, AnimatePresence } from 'framer-motion';

export const IsMedium = () => useMediaQuery({ query: '(max-width: 600px)' });

export default function Header({ setPage_number, year, setIsOpenRight, isOpenRight, setIsOpenHeader, medium }) {

    return (
        <AnimatePresence>
                <motion.div className="left-box"
                    animate={medium && isOpenRight ? {x: -700} : {} }
                    transition={{ duration: 2 }}
                >
                    <div className="name-photo">
                        <div className="animated-border"></div>

                        <h1 className="myname">Sebastian Wilczyński</h1>
                        <h2 className="mydesc">Junior Frontend Developer</h2>

                        <div className="social-media">
                            <motion.div
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", bounce: 0.03, damping: 11, delay: 0.7 }}
                                initial={{ x: -100, opacity: 0 }}
                            >
                                <a href="https://github.com/wolfort"><i className="fab fa-github bounce"></i></a>
                            </motion.div>
                            <motion.div
                                animate={{ x: [0,18,0] }}
                                transition={{ type: "spring", bounce: 0.30, delay: 1.0 }}
                                initial={{ x: 0 }}
                            >
                                <a href="https://www.facebook.com/wolfortcs"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/wolfortcs"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/sebastian-wilczy%C5%84ski-65b644155/"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/wolfortcs_/"><i className="fab fa-instagram"></i></a>
                            </motion.div>
                        </div>

                    </div>

                    <nav>
                        <h2 className="menu-name">Menu</h2>
                        <ul className="main-li">
                            <li id="main-page" ><a href="#" onClick={function(){setIsOpenRight(true); setIsOpenHeader(false); setPage_number("1")}}>Strona główna</a></li>
                            <li id="about-me" ><a href="#" onClick={function(){setIsOpenRight(true); setIsOpenHeader(false); setPage_number("2")}}>O mnie</a></li>
                            <li id="portfolio" ><a href="#" onClick={function(){setIsOpenRight(true); setIsOpenHeader(false); setPage_number("3")}}>Portfolio</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                    </nav>

                    <div className="footer">
                        <h2>© {year} All rights reserved.</h2>
                    </div>

                </motion.div>
        </AnimatePresence>
    )
}
