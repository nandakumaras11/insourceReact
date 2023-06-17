import "./home.css";
import "./homeMobile.css";

import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaShippingFast, FaPlaneDeparture, FaRegCheckCircle, FaBoxOpen, FaBoxes, FaHandshake, FaStoreAlt, FaTruck, FaShip, FaWarehouse, FaArrowCircleUp } from "react-icons/fa";
import { SingleProduct, SingleProductType, SingleService, SingleServiceType, SocialMediaMenu } from "../Components/NavBar/SingleComponents/SingleComponent";
// import { menuInfo } from "../Constents";
import flag from "../images/flag.png"
import seychelles from "../images/seychelles.png"
import maldives from "../images/maldives.png"
import automobile from "../images/automobile.jpg"
import building from "../images/building.jpg"
import food from "../images/food.jpg"
import marine from "../images/marine.jpg"
import hospitality from "../images/hospitality.jpg"
import flight1 from "../images/flight1.jpg"
import roadtransport from "../images/roadtransport.jpg"
import ship from "../images/ship.jpg"
import warehouse from "../images/warehouse.jpg"
import { SingleMenuItem } from "../Components/NavBar/NavBar";
import { CountUp } from "use-count-up";

export const menuInfo = [
  {
    icon: "",
    menuText: "Home",
    link: "/"
  },
  {
    icon: "",
    menuText: "About Us",
    link: "/#aboutUS"
  },
  {
    icon: "",
    menuText: "Products",
    link: "/#product"
  },
  {
    icon: "",
    menuText: "Services",
    link: "/#service"
  },
  {
    icon: "",
    menuText: "Contact Us",
    link: "/#contact"
  },
];
export default function Home() {
  const products = [
    {
      productName: "Automobile spare parts",
      link: "/autoMobile",
      bg: automobile
    },
    {
      productName: "Building Materials",
      link: "/building",
      bg:building
    },
    {
      productName: "Food Products",
      link: "/food",
      bg: food
    },
    {
      productName: "Marine products",
      link: "/marine",
      bg: marine
    },
    {
      productName: "Hospitality Items",
      link: "/hospitality",
      bg: hospitality
    },
  ];
  const services = [
    {
      'image': flight1,
      'service': "Air Freight",
      'icon': <FaPlaneDeparture />,
      'description': "Swift and efficient shipment via air transportation, ensuring quick delivery of goods to destinations worldwide with speed and reliability."
    },
    {
      image:roadtransport,
      service: "ROAD TRANSPORT",
      icon: <FaTruck />,
      description: "Reliable and efficient shipment via road transportation, offering seamless delivery of goods to local and regional destinations with flexibility and timeliness."
    },
    {
      image: ship,
      service: "Sea Freight",
      icon: <FaShip />,
      description: "Cost-effective and reliable shipment via sea transport, providing efficient delivery of goods to global destinations with a focus on affordability and bulk cargo handling."
    },
    {
      image: warehouse,
      service: "WAREHOUSE",
      icon: <FaWarehouse />,
      description: "Strategically located warehouse in Jebel Ali, offering secure storage and distribution solutions, seamlessly connecting businesses to regional and global markets."
    },
  ]
  return <>
    <section className="homeBg" id="top">
      <div className="menuContainer">
        <div className="menuBar">
          {menuInfo.map((menu, key) => {
            return <SingleMenuItem key={key} icon={menu.icon} link={menu.link} menuText={menu.menuText} />
          })}
        </div>
        <SocialMediaMenu />
      </div>
      {/* menu end */}
      <div className="bannerOverlay">
        <div className="welcome" data-aos="fade-right" data-aos-delay="200"><FaShippingFast /> Welcome to insourze Global</div>
        <div className="tagline " data-aos="fade-left">We make the
          <span>World Smaller </span> </div>
        <div className="companyDescription"  data-aos="slide-up"><q>Powering Global Trade. We connect businesses worldwide, offering streamlined import and export solutions. Trust us to simplify complexities and drive success in the international marketplace.</q>
        </div>
        <div className="bannerButtonSection">
          <a href="#aboutUS" className="btnLearnMore " data-aos="fade-up" data-aos-delay="100">   <div className="">Learn More</div></a>
          <a href="#service" className="btnServices"  data-aos="fade-up"  data-aos-delay="200">   <div className="">Our Services</div></a>
          {/* <a href="#service">   <div className="btnServices">Our Services</div></a> */}
        </div>
        <div className="bannerGoals">
          <div className="service">
            <div className="client">
              <div className="clientCount"> <CountUp isCounting end={1200} duration={3.2} />+</div>
              <div className="clientsDescription">Client Satisfaction
              </div>
            </div>
            <div className="shipping">
              <div className="shippingCount"><CountUp isCounting end={250000} duration={3.2} />+</div>
              <div className="clientsDescription">Completed Deliveries
              </div>
            </div>

          </div>
          <div className="countries" data-aos="slide-up">
            <div className="country">
              <div className="flag">
                <img loading="lazy" src={flag} alt="india" width="40" height="40" />
              </div>
              <div className="countryName">India</div>
            </div>
            <div className="country">
              <div className="flag">
                <img loading="lazy" src={seychelles} alt="india" width="40" height="40" />
              </div>
              <div className="countryName">Seychells</div>
            </div>
            <div className="country">
              <div className="flag">
                <img loading="lazy" src={maldives} alt="india" width="40" height="40" />
              </div>
              <div className="countryName">Maldives</div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className="aboutUsContainer" id="aboutUS">
      <div className="aboutUsImage">
        <div className="flightImage" data-aos="slide-right"></div>
      </div>
      <div className="aboutUsTextContainer" data-aos="slide-up">
        <div className="aboutUsText"><FaPlaneDeparture color="#e10800" /> About &nbsp;<span> Us</span></div>
        <div className="aboutUsHead">Bridging Borders, Empowering Business</div>
        <div className="aboutUsDescription justyfyText">We are a leading import and export company with operations spanning India, Seychelles, and Maldives. Established in February 2018 in Ajman, UAE, we provide comprehensive trade services connecting businesses in these countries. Our expertise lies in efficient logistics management, secure warehousing, and seamless transportation. With a commitment to customer satisfaction, we ensure timely and reliable delivery of goods across borders. Leveraging our extensive network and industry knowledge, we offer tailored solutions for diverse industries. Our company is your trusted partner for successful international trade.</div>

        <div className="features">
          <div className="col1">
            <div className="feature" data-aos="fade"><FaRegCheckCircle className="red" />Fast delivery</div>
            <div className="feature"  data-aos="fade"><FaRegCheckCircle className="red" />Wholesale</div>
            <div className="feature"  data-aos="fade"><FaRegCheckCircle className="red" />Retail</div>
            <div className="feature"  data-aos="fade"><FaRegCheckCircle className="red" />Affordable Pricing</div>
          </div>
          <div className="col1">
            <div className="feature"  data-aos="fade"><FaRegCheckCircle className="red" />International business</div>
            <div className="feature"  data-aos="fade"><FaRegCheckCircle className="red" />Secure and Safe</div>
            <div className="feature"  data-aos="fade"><FaRegCheckCircle className="red" />Customer Support</div>
          </div>
        </div>
      </div>
    </section>
    <section className="productContainer" id="product" data-aos="fade-up" >
      <div className="sectionHead" >
        <FaBoxes color="#e10800" /> Our &nbsp;<span>Products</span>
      </div>
      <div className="sectionMainHead">Complete Import and Export Solutions</div>
      <div className="productDescription justyfyText">Experience a world of possibilities with our import and exporting company. We offer a diverse range of products to meet your needs. From top-notch automobile spare parts and reliable building materials to delicious food stuff and marine products, we have it all. Enhance your hospitality offerings with our exceptional items, ideal for hotels and resorts. Our comprehensive solutions ensure smooth logistics management, cost-effectiveness, and compliance with international trade regulations. With our expertise and dedication to customer satisfaction, we empower your business to thrive in the global market. Partner with us for efficient and reliable import and export services that open doors to success.
      </div>
      <div className="productList">
        {products.map((product: SingleProductType, index) => {
          return <SingleProduct productName={product.productName} link={product.link} bg={product.bg} key={index} />
        })}
      </div>
    </section>
    <section className="contactUsBanner" >
      <div className="sectionMainHead" data-aos="fade-up">Our Goals</div>
      <div className="contactUsDetails justyfyText" data-aos="fade-up">We strive to optimize supply chain operations, ensuring efficient transportation, streamlined processes, and timely delivery of goods. Our focus is on customer satisfaction, building strong partnerships, and exceeding expectations. We aim to establish a reliable and robust global network, expanding our reach to connect businesses with markets worldwide. Embracing sustainability, innovation, and continuous improvement, we seek to minimize environmental impact, leverage technology, and enhance operational efficiency. Our ultimate goal is to be a trusted logistics partner, enabling success for our clients and driving growth in the global marketplace.</div>
      <a href="#contact" className="contactUsBtn">  <div >Contact Us</div></a>
    </section>

    <section className="ourServicesContainer" id="service" data-aos="fade-up">
      <div className="sectionHead">
        <FaHandshake color="#e10800" />Our&nbsp;<span>Services</span>
      </div>
      <div className="serviceDetails">
        <div className="serviceTextSection" >
          <div className="sectionMainHead">We provide the best logistics service for you.
          </div>
          <div className="subHead"  data-aos="fade-up" ><FaShippingFast className="subHeadIcon" />Logistics </div>
          <div className="importExportServices justyfyText"  data-aos="slide-up" >Whether you're looking to expand your product range through imports or reach new markets through exports, we have you covered. Our dedicated team handles all aspects, from sourcing high-quality products to managing customs procedures and logistics. With a strong network and deep industry knowledge, we navigate complexities, negotiate competitive rates, and ensure compliance with regulations. Trust us to be your reliable partner in international trade, delivering exceptional import and export services tailored to your specific needs.
            <div className="features">
              <div className="col1">
                <div className="feature"><FaRegCheckCircle className="red" />Efficient Supply Chain Management</div>
                <div className="feature"><FaRegCheckCircle className="red" />Customized Solutions</div>
                <div className="feature"><FaRegCheckCircle className="red" />Global Reach</div>
                <div className="feature"><FaRegCheckCircle className="red" />Real-Time Tracking</div>
                <div className="feature"><FaRegCheckCircle className="red" />Industry Expertise</div>

              </div>
              <div className="col1">
                <div className="feature"><FaRegCheckCircle className="red" />Cost Optimization</div>
                <div className="feature"><FaRegCheckCircle className="red" />Risk Management</div>
                <div className="feature"><FaRegCheckCircle className="red" />Responsive Customer Support</div>
                <div className="feature"><FaRegCheckCircle className="red" />Sustainability</div>
                <div className="feature"><FaRegCheckCircle className="red" />Continuous Improvement</div>
              </div>
            </div>
            <section className="procurementSection"  data-aos="slide-up" >
              <div className="subHead justyfyText"><FaStoreAlt className="subHeadIcon" />procurement </div>
              Our procurement services offer strategic sourcing, cost reduction, supplier management, and risk mitigation. We streamline your procurement process, secure favorable contracts, and provide transparent reporting. With expertise in market intelligence and continuous improvement, we deliver value and optimize your procurement operations.
              <div className="features">
                <div className="col1">
                  <div className="feature"><FaRegCheckCircle className="red" />Strategic Sourcing</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Supplier Management</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Cost Reduction</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Streamlined Procurement Process</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Market Intelligence</div>

                </div>
                <div className="col1">
                  <div className="feature"><FaRegCheckCircle className="red" />Risk Mitigation</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Supplier Diversity</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Contract Negotiation</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Transparency and Reporting</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Continuous Improvement</div>
                </div>
              </div>

            </section>

          </div>
        </div>
        <div className="serviceImageSection">
          <div className="flightImage flightImageLeft"></div>
        </div>
      </div>
    </section>
    <section className="topServices" data-aos="fade-up">
      {services.map((service: SingleServiceType, key) => {
        return <SingleService key={key} icon={service.icon} service={service.service} image={service.image} description={service.description} />
        // return <SingleService image, service, icon, description />
      })}
    </section>
    <section className="contactUs" id="contact"  data-aos="fade-up">
      <div className="contactUsLeft">
        <div className="map">

        </div>
        <div className="sectionHead" data-aos="fade-up">
          <FaHandshake color="#e10800" /> Contact&nbsp;<span>Us</span>
        </div>
        <div className="sectionMainHead gap" data-aos="slide-up">Get In Touch</div>

        <div className="address" data-aos="fade-up">
          <div className="conatctUsSubHead">Address</div>
          <div className="contactUsValues" >
            <pre className="linebreak">{`Insourze Global FZE
            PO Box: 31795
            Ajman UAE`}</pre>

          </div>
        </div>
        <hr className="line"  data-aos="slide-up"></hr>
        <div className="callUs"  data-aos="fade-up">
          <div className="conatctUsSubHead">Call US</div>
          <div className="contactUsValues">
          <a href={`tel:${process.env.REACT_APP_MOBILE}`}><div>{process.env.REACT_APP_MOBILE}</div></a>
          </div>
        </div>
        <hr className="line"  data-aos="slide-up"></hr>
        <div className="mail"  data-aos="fade-up">
          <div className="conatctUsSubHead">Email</div>
          <div className="contactUsValues">
            <div>{process.env.REACT_APP_EMAIL}</div>
          </div>
        </div>
        <hr className="line"  data-aos="slide-up"></hr>
        <div className="followUs"  data-aos="slide-up">
          <div className="conatctUsSubHead followUsHead">FOLLOW US</div>
          <div className="contactUsValues">
            <div><SocialMediaMenu /></div>
          </div>
        </div>


      </div>
      <div className="contactUsRight">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.335475113237!2d76.62970754999999!3d9.236796850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0619b7c32320d3%3A0x8626062c65ae732c!2sIndian%20Oil%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1685078274678!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }}  allowFullScreen= {false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src={process.env.REACT_APP_MAP} width="100%" height="100%" style={{ border: '0' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    {/* <a className="scrollToTop"  href="#top" onClick={()=>{window.scrollTo(0, 0);}}>
      <FaArrowCircleUp /> 
    </a> */}
    {/* <Footer /> */}
  </>;
}

