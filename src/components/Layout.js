import * as React from 'react'
import { Link } from 'gatsby'

import '../styles/base.css'


const IndexPage = () => {
    return (
        <>
            <header>
                <h1>
                    <Link className="hzr" to="/">&lt;hzr/&gt;</Link>
                </h1>
                <div>
                    <Link className="social"to="https://github.com/hannarosenfeld">&gt; github</Link>
                </div>
            </header>
        </>
    )
}

export default IndexPage
