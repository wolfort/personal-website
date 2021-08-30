import React from 'react'
import { useSpring, animated } from "react-spring";

export default function AboutMe(year) {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
        })

    const languages = ["HTML", "CSS", "JavaScript", "C#", "Python", "PHP"];
    const programs = ["Adobe Photoshop", "Discord", "Adobe Premiere", "OBS", "Adobe After Effects"];

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
                <div className="skill-box-name">

                    {/* Prawa część */}
                    <div className="skill-bar">

                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{languages[0]}</div>
                                <div>70%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{languages[1]}</div>
                                <div>60%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{languages[2]}</div>
                                <div>25%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{languages[3]}</div>
                                <div>20%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{languages[4]}</div>
                                <div>20%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{languages[5]}</div>
                                <div>20%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Prawa część */}
                    <div className="skill-bar">

                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{programs[0]}</div>
                                <div>80%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{programs[1]}</div>
                                <div>75%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{programs[2]}</div>
                                <div>70%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{programs[3]}</div>
                                <div>70%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="skillbox">
                            <div className="skillbox-top">
                                <div>{programs[4]}</div>
                                <div>65%</div>
                            </div>
                            <div className="skill">
                                <div className="skill-level" style={{ width: '65%' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </animated.div>

    )
}
