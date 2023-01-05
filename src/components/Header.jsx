import React from 'react'
import DesktopHeaderContent from './DesktopHeaderContent'
import DesktopheaderInfoBox from './DesktopheaderInfoBox'
import DesktopMenu from './DesktopMenu'
import "./header.css"
const Header = () => {
    return (
        <div className='header'>
            <DesktopMenu />
            <DesktopHeaderContent />
            <DesktopheaderInfoBox />
        </div>
    )
}

export default Header