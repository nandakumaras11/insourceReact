import { useEffect } from "react"
import { FaArrowCircleUp, FaFacebookSquare, FaInstagram, FaPlaneDeparture, FaWhatsapp } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import logo from "../../../images/logow.png"

export type SingleProductType = {
    productName: string
    link: string
    bg: string
}
export type SingleServiceType = {
    image?: string,
    service: string,
    icon?: any,
    description: string
}
// import au from "../../../images/automobile.jpg"
export const SingleProduct = ({ productName, bg, link }: SingleProductType) => {
    const navigate = useNavigate();
    return (
        <div data-aos="zoom-out" className="product" style={{ 'backgroundImage': `url(${bg})` }}>
            <div className="productName" >
                {productName}
            </div>
            <div onClick={() => navigate('/Product', { state: { productName } })} className="viewMoreBtn">View More</div>
        </div>
    )
}

export const SingleService = ({ image, service, icon, description }: SingleServiceType) => {
    return (
        <div className="service">
            <div className="serviceImage" data-aos="zoom-out" style={{ 'backgroundImage': `url(${image})` }}></div>
            <div className="serviceInfo">
                <div className="serviceIcon">{icon}</div>
                <div className="serviceName tu">{service}</div>
                <div className="serviceDescription">{description}</div>
            </div>
        </div>
    )
}


export const SocialMediaMenu = () => {
    return (
        <div className="socialMediaMenu">

            <div className="facebook">
                <a href={process.env.REACT_APP_FB}><FaFacebookSquare />
                </a>
            </div>
            <div className="instagram">
                <a href={process.env.REACT_APP_INSTAGRAM}>  <FaInstagram /></a>
            </div>
            <div className="whatsApp">
                <a href={process.env.REACT_APP_WHATSAPP}>  <FaWhatsapp /></a>

            </div>
        </div>
    )
}

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
export const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const Loader = () => {
    return (
        <div className="loader">
            <img width="170px" src={logo} />
        </div>
    )
}

export const ScrollToTopBtn = () => {
    return (
        <a className="scrollToTop" href="#top" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth' });}}>
            <FaArrowCircleUp />
        </a>
    )
}
