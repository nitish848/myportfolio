import React from 'react'
import "./desktopMenu.css"
const DesktopMenu = () => {
    return (
        <div className='desktopMenu'>
            <div className="menuLinks">
                <div className="logo">

                </div>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>|</li>
                    <li>Github</li>
                    <li>Linkedin</li>
                </ul>
            </div>
            <div className="menuBtn">
                <button>Hire me</button>
            </div>
        </div>
    )
}

export default DesktopMenu