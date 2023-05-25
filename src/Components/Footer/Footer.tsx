import { FaEnvelope, FaLocationArrow, FaPhone, FaPhoneAlt } from "react-icons/fa"
import "./Footer.css"
import { SocialMediaMenu } from "../NavBar/SingleComponents/SingleComponent"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"
export const Footer = () => {
  return (
    <section className="copyRightFooterContainer">
      <div className="footerContainer">
        <div className="col">
          <div className="footerCompanyName"><b>Insource</b> Global</div>
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
          <div className="contactInfo">
            <div className="contactIcon"><FaPhoneAlt /></div>
            <div className="contactInfoValue">{process.env.REACT_APP_MOBILE}</div>
          </div>
        </div>
        <div className="col">
          <div className="redHeadFooter">Quick Links</div>
          <div className="footerLine"></div>
          <div className="footerItem">About Us</div>
          <div className="footerItem">Products</div>
          <div className="footerItem">Services</div>
          <div className="footerItem">Contact Us</div>
        </div>
        <div className="col">
          <div className="redHeadFooter">Working Hours</div>
          <div className="footerLine"></div>
          <div className="footerItem">9AM- 6PM. Monday-Sunday</div>
            <Link  to="/Product" className="callBtnFooter"><FaPhoneAlt /> <span>{process.env.REACT_APP_MOBILE}</span></Link>
          <div className="footerItem"><SocialMediaMenu /></div>
        </div>
        {/* <div className="footerLine"></div> */}

      </div>
      <div className="copyRight">Copyright@2023. All rights reserved</div>
    </section>
  )
}

export default Footer