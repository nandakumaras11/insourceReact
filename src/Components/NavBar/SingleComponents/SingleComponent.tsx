import { FaFacebookSquare, FaInstagram, FaPlaneDeparture, FaWhatsapp } from "react-icons/fa"

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
    return (
        <div className="product" style={{ 'backgroundImage': `url(${bg})` }}>
            <div className="productName" >
                {productName}
            </div>
            <div className="viewMoreBtn">View More</div>
        </div>
    )
}

export const SingleService = ({ image, service, icon, description }: SingleServiceType) => {
    return (
        <div className="service">
            <div className="serviceImage" style={{ 'backgroundImage': `url(${image})` }}></div>
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
                <FaFacebookSquare />
            </div>
            <div className="instagram">
                <FaInstagram />
            </div>
            <div className="whatsApp">
                <FaWhatsapp />
            </div>
        </div>
    )
}
