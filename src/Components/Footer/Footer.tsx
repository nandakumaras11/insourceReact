import { FaEnvelope, FaLocationArrow, FaPhone, FaPhoneAlt } from "react-icons/fa"
import "./Footer.css"
import { SocialMediaMenu, scrollWithOffset } from "../NavBar/SingleComponents/SingleComponent"
import { Link, useLocation } from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';
import { useEffect } from "react";
import logo from "../../images/logow.png"
// import { Link } from "react-router-dom"
export const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="copyRightFooterContainer">
      <div className="footerContainer">
        <div className="col">
          <div className="footerCompanyName">  <Link to="/">
                    <div className="logo">
                        <img src={logo} style={{ objectFit: "cover" }} alt="logo" />
                    </div>
                </Link></div>
          <div className="footerCompanyDescription">Efficient logistics solutions for seamless transportation, warehousing, and distribution, ensuring reliable and timely delivery of goods worldwide.
          </div>
          <div className="contactInfo">
            <div className="contactIcon"><FaLocationArrow /></div>
            <div className="contactInfoValue">{process.env.REACT_APP_ADDRESS}</div>
          </div>
          <div className="contactInfo">
            <div className="contactIcon"><FaEnvelope /></div>
            <div className="contactInfoValue">{process.env.REACT_APP_EMAIL}</div>
          </div>
          <a href={`tel:${process.env.REACT_APP_MOBILE}`}>
             <div className="contactInfo">
            <div className="contactIcon"><FaPhoneAlt /></div>
            <div className="contactInfoValue">{process.env.REACT_APP_MOBILE}</div>
          </div>
          </a>
        </div>
        <div className="col">
          <div className="redHeadFooter">Quick Links</div>
          <div className="footerLine"></div>
          <NavHashLink to="/#aboutUS" className="footerItem">About Us</NavHashLink>
          <NavHashLink to="/#product" className="footerItem">Products</NavHashLink>
          <NavHashLink to="/#service" className="footerItem">Services</NavHashLink>
          <NavHashLink to="/#contact" className="footerItem">Contact Us</NavHashLink>
        </div>
        <div className="col">
          <div className="redHeadFooter">Working Hours</div>
          <div className="footerLine"></div>
          <div className="footerItem">9AM- 6PM. Monday-Sunday</div>

          <a href={`tel:${process.env.REACT_APP_MOBILE}`}><div className="callBtnFooter"><FaPhoneAlt /> <span>{process.env.REACT_APP_MOBILE}</span></div></a>
          <div className="footerItem"><SocialMediaMenu /></div>
        </div>
        {/* <div className="footerLine"></div> */}

      </div>
      <div className="copyRight">Copyright@2023. All rights reserved</div>
    </section>
  )
}

export default Footer