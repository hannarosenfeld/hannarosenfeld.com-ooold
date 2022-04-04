import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import '../styles/base.css'
import Intro from '../components/Intro'


const Layout = ({ children }) => {
    return (
        <>
            <header>
                <h1>
                    <Link className="hzr" to="/">&lt;hzr/&gt;</Link>
                </h1>
                <Intro/>
            </header>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
