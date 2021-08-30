import React from 'react'
import { useSpring, animated } from "react-spring";

export default function Portfolio() {

    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
        })

    return (
        <animated.div style={props}>
            <div class="portfolio-right-box">
                <h2 class="main-color">Portfolio</h2>

                <div class="portfolio-grid">

                <li>
                    <div class="portfolio-box">
                        <img src="assets/mve-stream.png" alt="mve-stream" class="portfolio-example"></img>
                        <a href="https://mve.gg/"><div class="portfolio-img-overlay"></div></a>
                    </div>
                    <div class="portoflio-name">
                        <h3 class="main-color">Mighty Five Esports</h3>
                    </div>
                    <div class="portolio-desc">
                        <p>Prowadzenie tranmisji na żywo</p>
                    </div>
                </li>

                <li>
                    <div class="portfolio-box">
                        <img src="assets/proliders.png" alt="proliders" class="portfolio-example"></img>
                        <a href="https://www.proliders.pl/"><div class="portfolio-img-overlay"></div></a>
                    </div>
                    <div class="portoflio-name">
                        <h3 class="main-color">Proliders</h3>
                    </div>
                    <div class="portolio-desc">
                        <p>Strona internetowa</p>
                    </div>
                </li>

                <li>
                    <div class="portfolio-box">
                        <img src="assets/ativar.png" alt="ativar" class="portfolio-example"></img>
                        <a href="https://www.facebook.com/ativarteam"><div class="portfolio-img-overlay"></div></a>
                    </div>
                    <div class="portoflio-name">
                        <h3 class="main-color">AtiVar</h3>
                    </div>
                    <div class="portolio-desc">
                        <p>Oprawa graficzna</p>
                    </div>
                </li>

                <li>
                    <div class="portfolio-box">
                        <img src="assets/ativar.png" alt="ativar" class="portfolio-example"></img>
                        <a href="https://www.facebook.com/ativarteam"><div class="portfolio-img-overlay"></div></a>
                    </div>
                    <div class="portoflio-name">
                        <h3 class="main-color">AtiVar</h3>
                    </div>
                    <div class="portolio-desc">
                        <p>Oprawa graficzna</p>
                    </div>
                </li>
                </div>

            </div>
        </animated.div>
    )
}
