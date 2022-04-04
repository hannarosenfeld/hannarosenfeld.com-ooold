import * as React from 'react'
import { Link } from 'gatsby'

import '../styles/base.css'


const IndexPage = () => {
    return (
        <>
            <header>
                <h1 className="main-heading">
                    <Link to="/">hzr</Link>
                </h1>
                <div>
                    <Link to="https://github.com/hannarosenfeld">github</Link>
                </div>
            </header>
        </>
    )
}

export default IndexPage
