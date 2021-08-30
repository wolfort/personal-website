import { render } from '@testing-library/react';
import React from 'react'
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useSpring, animated } from "react-spring";

export default function AboutMe(year) {

// płynne przejście między stronami
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
        })

    // tabele z językiami i programami
    const languages = ["HTML", "CSS", "Sass", "JavaScript", "React.js", "C#", "Python", "PHP"];
    const languagesLevel = ["85%", "80%", "80%", "60%", "60%", "45%", "25%", "20%"];
    const programs = ["Adobe Photoshop", "Discord", "vMix", "Adobe Premiere", "OBS", "Adobe After Effects"];
    const programsLevel = ["80%", "75%", "75%", "70%", "70%", "65%"];
    const languageBar = [];
    const programBar = [];

    // funkcja do wyświetlenia kilku języków
    function NumberOfLanguages () {
        for( var i = 0; i < languages.length; i++ ) {
            languageBar.push(
                <div className="skillbox">
                <div className="skillbox-top">
                    <div>{languages[i]}</div>
                    <div>{languagesLevel[i]}</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-level" style={{ width: languagesLevel[i] }}></div>
                </div>
            </div>
            )
        }
        return languageBar;
    }

    // funkcja do wyświetlenia kilku programów
    function NumberOfPrograms () {
        for( var i = 0; i < programs.length; i++ ) {
            programBar.push(
                <div className="skillbox">
                <div className="skillbox-top">
                    <div>{programs[i]}</div>
                    <div>{programsLevel[i]}</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-level" style={{ width: programsLevel[i] }}></div>
                </div>
            </div>
            )
        }
        return programBar;
    }

    return (
        <animated.div style={props}>
            <div className="about-me-right-box">


                <h2 className="main-color">O mnie</h2>
                <div className="about-me-1">
                    <div className="about-me-box">
                        <p>Nazywam się Sebastian Wilczyński. Jestem początkującym programistą. Interesuje się nowymi technologiami, grami komputerowymi, esportem oraz grafiką komputerową. Właściwie wszystkim co jest związane przynajmniej trochę z komputerami. Skończyłem technikum na kierunku teleinformatyk. Aktualnie studiuję inżynierię sieci komputerowych.</p>
                    </div>

                    <div className="about-me-box info-right-box">
                        <div className="info-right"><span className="main-color">Pseudonim:</span> <span>wolfort</span></div>
                        <div className="info-right"><span className="main-color">Wiek:</span> <span>{year.year - 2000}</span></div>
                        <div className="info-right"><span className="main-color">Kraj:</span> <span>Polska</span></div>
                        <div className="info-right"><span className="main-color">Miasto:</span> <span>Lębork</span></div>
                        <div className="info-right"><span className="main-color">e-mail:</span> <span>wolfortcs@gmail.com</span></div>
                    </div>
                </div>

                <h2 className="main-color skills-name">Umiejętności</h2>
                <div className="skill-box">

                    {/* Prawa część */}
                    <div className="skill">
                        {NumberOfLanguages()}
                    </div>

                    {/* Prawa część */}
                    <div className="skill">
                        {NumberOfPrograms()}
                    </div>
                </div>
            </div>
        </animated.div>

    )
}
