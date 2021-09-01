import React, {useState} from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import "./app.scss";
import { IsMedium } from './components/Header'
import { AnimatePresence, motion } from "framer-motion";

function App() {

// ustawienie numeru strony
let [page_number, setPage_number] = useState("2");

let [isOpenRight, setIsOpenRight] = useState(false);

let [isOpenHeader, setIsOpenHeader] = useState(false);

// oblicza rok
var d = new Date();
const year = d.getFullYear();

const medium = IsMedium();

console.log(medium)

return (
    <div className="app">
        {/* Główny blok */}
        <div className="container">
        <div className="box">
            {/* Ładowanie header'a */}
            <Header 
                setPage_number={setPage_number}
                year={year}
                setIsOpenRight={setIsOpenRight}
                isOpenRight={isOpenRight}
                setIsOpenHeader={setIsOpenHeader}
                medium={medium}
            />

            <AnimatePresence>
                { isOpenRight == true && (
                    <motion.div className="right-box"
                    animate={ medium ? {width: "100%"} : {width: 1000} }
                    transition={{ duration: 2 }}
                    exit={{ width: 0 }}
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
                    </motion.div>
                    <motion.div className="close-arrow"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 180, opacity: 1, transition: { delay: 1} }}
                    exit={{ rotate: 0, opacity: 0, transition: { delay: 0.5} }}
                    >
                        <i className="fas fa-chevron-right" onClick={function(){setIsOpenRight(false)}}></i>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
        </div>
    </div>
);
}

export default App;
