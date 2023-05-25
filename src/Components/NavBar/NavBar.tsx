import "./NavBar.css"
import { GrMail } from "react-icons/gr";
import { FaRegClock, FaPhoneVolume, FaHamburger, FaBars, FaCross, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { menuInfo } from "../../Home/Home";
import logo from "../../images/logow.png"
export const NavBar = () => {
    const [mobileMenuOpen, handleMobileMenu] = useState(false);
    const toggleMenu = () => {
        handleMobileMenu(!mobileMenuOpen);
    }
    return (
        <>
            <MobileMenu mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu} />
            <nav className="desktopNav">
                <div className="logo">
                    <img src={logo} style={{ objectFit: "cover" }} alt="logo" />
                </div>
                <div className="mobileMenuToggle" onClick={toggleMenu}><FaBars className="barIcon" /></div>
                <div className="navBarRight">
                    <div className="navBarRightItem">
                        <div className="icon">
                            <FaRegClock />
                        </div>
                        <div className="text">
                            <div className="textLine">Mon-Sat 9AM to 6PM</div>
                            <div className="textLine">Sunday Closed</div>
                        </div>
                    </div>
                    <div className="navBarRightItem">
                        <div className="icon">
                            <GrMail />
                        </div>
                        <div className="text">
                            <div className="textLine">Email</div>
                            <div className="textLine">contact@global.com</div>
                        </div>
                    </div>
                    <div className="navBarRightItem">
                        <div className="icon">
                            <FaPhoneVolume />
                        </div>
                        <div className="text">
                            <div className="textLine"> Call Us</div>
                            <div className="textLine">(+91)8554654654654</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

interface SingleMenuItemTypes {
    icon?: string,
    menuText: string,
    link?: string,
    toggleMenu?: any
}
export const SingleMenuItem = ({ icon, menuText, link, toggleMenu }: SingleMenuItemTypes) => {
    return (
        <a href={link} className="menuItem" onClick={toggleMenu && toggleMenu}>
            <div className="menuIcon">{icon}</div>
            <div className="menuText">{menuText}
                <div className="activeMenu">
                    <span>{menuText}</span>
                </div>
            </div>

        </a>
    )
}

export const MobileMenu = ({ mobileMenuOpen, toggleMenu }: any) => {
    return (
        <div className={mobileMenuOpen ? "mobileMenuContainer showMenu" : "mobileMenuContainer"}>
            <div className="closeIcon" onClick={toggleMenu}><FaTimes /></div>
            {menuInfo.map((menu, index) => {
                return <SingleMenuItem key={index} icon={menu.icon} link={menu.link} menuText={menu.menuText} toggleMenu={toggleMenu} />
            })}
        </div>
    )
}

export default NavBar