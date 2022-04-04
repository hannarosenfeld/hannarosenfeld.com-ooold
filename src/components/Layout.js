import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Typewriter from "typewriter-effect";

import '../styles/base.css'

function TypewriterEffect() {
  return (
    <div className="typewriter">
      <Typewriter
       onInit={(typewriter)=> {
       typewriter
       .typeString("Hello World!")
       .pauseFor(1000)
       .deleteAll()
       .typeString("I am a web developer living and working in Philadelphia, PA.")
       .typeString(" Contact me through my social links below: ")
       .pauseFor(1000)
       .start();
       }}
       />
    </div>
  );
}
const IndexPage = () => {
    return (
        <>
            <header>
                <h1>
                    <Link className="hzr" to="/">&lt;hzr/&gt;</Link>
                </h1>
                <TypewriterEffect/>
                <p id="typewriter"></p>
                <div>
                    <Link className="social"to="https://github.com/hannarosenfeld">&gt; github</Link>
                </div>
            </header>
        </>
    )
}

export default IndexPage
