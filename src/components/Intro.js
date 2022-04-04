import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Typewriter from 'typewriter-effect';


const Links = () => (
    <div className="social-links">
        <Link className="social-link" to="https://github.com/hannarosenfeld">&gt; github</Link>
        <Link className="social-link" to="https://www.linkedin.com/in/hannazitarosenfeld/">&gt; linkedin</Link>
    </div>
)


const Intro = () => {
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowLinks(true);
        }, 20400);
    }, []);

    return (
        <>
        <div className="typewriter">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Hello World!')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                            'I am a web developer living and working in Philadelphia, PA.'
                        )
                        .typeString(' Contact me through my social links below: ')
                        .pauseFor(1000)
                        .start();
                }}
            />
                    </div>
            {showLinks && <Links/>}
</>
    );
};

export default Intro
