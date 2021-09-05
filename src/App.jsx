import React, {useState} from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "./app.scss";
import { IsMedium } from './components/Header'
import { AnimatePresence, motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

function App() {

// ustawienie numeru strony
let [page_number, setPage_number] = useState("2");

let [isOpenRight, setIsOpenRight] = useState(false);

// oblicza rok
var d = new Date();
const year = d.getFullYear();

const medium = IsMedium();

const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
    config: {duration: 500}
    })


return (
    <div className="app">
        {/* Główny blok */}
        <div className="container">
        <animated.div style={props} className="box">
            {/* Ładowanie header'a */}
            <Header 
                setPage_number={setPage_number}
                year={year}
                setIsOpenRight={setIsOpenRight}
                isOpenRight={isOpenRight}
                medium={medium}
            />

            <AnimatePresence>
                { isOpenRight == true && (
                    <motion.div className="right-box"
                    animate={ medium ? {width: "100vw"} : {width: 1000} }
                    transition={{ duration: 2 }}
                    exit={ medium ? {width: "100vw"} : {width: 0} }
                >
                    <motion.div className="animation-right-box"
                    initial={{ opacity: 0, overflow: "hidden" }}
                    animate={{ opacity: 1, overflow: "visible", transition: { delay: 2.2} }}
                    exit={{ opacity: 0, overflow: "hidden" }}
                    >
                        {page_number == 1 && <Home/>}
                        {page_number == 2 && <AboutMe
                            year={year}
                        />}
                        {page_number == 3 && <Portfolio/>}
                        {page_number == 4 && <Contact/>}
                    </motion.div>
                    <motion.div className="close-arrow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1} }}
                    exit={{ opacity: 0, transition: { delay: 0.5} }}
                    >
                        <i className="fas fa-chevron-left" onClick={function(){setIsOpenRight(false)}}></i>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </animated.div>
        </div>
    </div>
);
}

export default App;
