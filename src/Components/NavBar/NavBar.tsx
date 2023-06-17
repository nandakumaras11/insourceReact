import "./NavBar.css"
import { GrMail } from "react-icons/gr";
import { FaRegClock, FaPhoneVolume, FaHamburger, FaBars, FaCross, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { menuInfo } from "../../Home/Home";
import logo from "../../images/logow.png"
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
export const NavBar = () => {
    const [mobileMenuOpen, handleMobileMenu] = useState(false);
    const toggleMenu = () => {
        handleMobileMenu(!mobileMenuOpen);
    }
    return (
        <>
            <MobileMenu mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu} />
            <nav className="desktopNav">
                <Link to="/">
                    <div className="logo">
                        <img loading="lazy" src={logo} style={{ objectFit: "cover" }} alt="logo" />
                    </div>
                </Link>
                <div className="mobileMenuToggle" onClick={toggleMenu}><FaBars className="barIcon" /></div>
                <div className="navBarRight">
                    <div className="navBarRightItem">
                        <div className="icon">
                            <FaRegClock />
                        </div>
                        <div className="text">
                            <div className="textLine">Mon-Sat 9AM to 5PM</div>
                            <div className="textLine">Sunday Closed</div>
                        </div>
                    </div>
                    <div className="navBarRightItem">
                        <div className="icon">
                            <GrMail />
                        </div>
                        <div className="text">
                            <div className="textLine">Email</div>
                            <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>  <div className="textLine">{process.env.REACT_APP_EMAIL}</div>
                            </a>
                        </div>
                    </div>
                    <div className="navBarRightItem">
                        <div className="icon">
                            <FaPhoneVolume />
                        </div>
                        <div className="text">
                            <div className="textLine"> Call Us</div>
                            <a href={`tel:${process.env.REACT_APP_MOBILE}`}><div className="textLine">{process.env.REACT_APP_MOBILE}</div></a>
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
    link: string,
    toggleMenu?: any
}
export const SingleMenuItem = ({ icon, menuText, link, toggleMenu }: SingleMenuItemTypes) => {
    const scrollWithOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };
    return (
        <NavHashLink scroll={(el) => scrollWithOffset(el)} to={link} className="menuItem" onClick={toggleMenu && toggleMenu}>
            <div className="menuIcon">{icon}</div>
            <div className="menuText">{menuText}
                <div className="activeMenu">
                    <span>{menuText}</span>
                </div>
            </div>

        </NavHashLink>
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