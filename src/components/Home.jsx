import React from 'react'
import { useSpring, animated } from "react-spring";

export default function Home() {

    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
        })

    return (
            <animated.div style={props}>
                <div className="home-right">
                        <h2 className="name-right-box">Sebastian Wilczyński</h2>
                        <h3 className="desc-right-box">Web Designer</h3>
                </div>
            </animated.div>
    )
}
