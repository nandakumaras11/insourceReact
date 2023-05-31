import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import bgauomobile from "../images/bgauomobile.jpg"
import bgHospitality from "../images/bghospitality.jpg"
import bgBuildingMeterials from "../images/bgbuilding.jpg"
import bgMarineProducts from "../images/bgmarine.jpg"
import bgFoodProducts from "../images/bgfood.jpg"
import { FaFish, FaGlassMartiniAlt, FaHamburger, FaRegBuilding, FaWrench } from "react-icons/fa";
import "./Product.css";
import { menuInfo } from "../Home/Home";
import { SingleMenuItem } from "../Components/NavBar/NavBar";
import { SocialMediaMenu } from "../Components/NavBar/SingleComponents/SingleComponent";
let ProductDB = [
    {
        bg: bgauomobile,
        productName: "AUTOMOBILE SPARE PARTS",
        description: "Welcome to our premier platform for automobile spare parts import and export. We specialize in connecting suppliers and customers worldwide, providing top-quality automotive components for a seamless driving experience. With a wide range of spare parts available, we ensure quick and efficient sourcing, competitive pricing, and reliable delivery. Whether you're a distributor, retailer, or repair shop, we cater to your specific needs, offering a comprehensive selection of genuine parts for various vehicle makes and models. Trust us to be your trusted partner in the global automotive spare parts industry.",
        icon: <FaWrench className="productIcon" />,
        products: ["Engine components", "Electrical parts", "Filters", "Fuel system parts", "Brake system components", "Cooling system parts", "Body and interior parts"]
    },
    {
        bg: bgBuildingMeterials,
        productName: "BUILDING MATERIALS",
        description: "Welcome to our premier platform for building materials import and export. We specialize in sourcing and delivering a comprehensive range of high-quality products for construction projects worldwide. From cement and concrete to roofing materials, flooring solutions, and plumbing fixtures, we offer a diverse selection of building materials to meet your specific needs. Our extensive network of trusted suppliers ensures competitive pricing, reliable delivery, and sustainable solutions. Whether you're a contractor, developer, or supplier, we are your trusted partner for seamless import and export of building materials. Explore our wide range of products and experience excellence in construction material sourcing.",
        icon: <FaRegBuilding className="productIcon" />,
        products: ["Cement and concrete products",
            "Bricks and blocks",
            "Roofing materials",
            "Flooring materials",
            "Wall finishes",
            "Plumbing and sanitary fixtures",
            "Electrical fittings and fixtures",
            "Doors and windows",
            "Insulation materials",
            "Hardware and tools"
        ]
    },
    {
        bg: bgFoodProducts,
        productName: "FOOD PRODUCTS",
        description: "Discover a world of flavors with our food products import and export services. We specialize in sourcing and delivering high-quality, delicious food products from around the globe. From exotic spices and gourmet ingredients to premium beverages and ready-to-eat snacks, we offer a diverse range of culinary delights. Our global network of suppliers ensures the freshest produce, strict quality standards, and timely delivery. We also offer a wide range of high-quality and eco-friendly products, including plates, cups, and biodegradable alternatives. Whether you're a distributor, retailer, or foodservice provider, we cater to your specific needs, providing exceptional sourcing solutions for your culinary business. Explore our extensive portfolio of delectable food products and embark on a culinary journey with us.",
        icon: <FaHamburger className="productIcon" />,
        products: [
            "Spices and seasonings",
            "Dried fruits and nuts",
            "Coffee and tea",
            "Canned and preserved foods",
            "Oils and condiments",
            "Pasta and grains",
            "Sauces and marinades",
            "Snacks and confectionery",
            "Frozen foods",
            "Dairy products",
            "Disposable items"
        ]
    },
    {
        bg: bgMarineProducts,
        productName: "MARINE PRODUCTS",
        description: "Your premier source for boat parts import and export. We specialize in sourcing and delivering a comprehensive range of high-quality boat parts and accessories to meet the diverse needs of boat owners and marine industry professionals. From marine engines and propulsion systems to navigation equipment, electrical components, and safety gear, we offer a wide selection of reliable products. Our commitment to excellence ensures that our customers receive top-quality parts from trusted manufacturers, backed by exceptional service and competitive pricing. Whether you're in need of maintenance supplies or seeking to upgrade your boat, explore our extensive inventory and experience reliable performance on the water.",
        icon: <FaFish className="productIcon" />,
        products: [
            "Boat",
            "Boat covers and upholstery",
            "Marine engines and propulsion systems",
            "Boat hardware and accessories",
            "Steering and control systems",
            "Marine paints and coatings"
        ]
    },
    {
        bg: bgHospitality,
        productName: "HOSPITALITY ITEMS",
        description: "Your premier source for hospitality items import and export. We specialize in sourcing and delivering a wide range of high-quality products to elevate the hospitality experience. From luxurious hotel linens and bedding to premium toiletries, amenities, and hotel furniture, we offer a comprehensive selection of hospitality items. Our commitment to quality ensures that our products meet the highest standards of comfort, durability, and aesthetic appeal. Whether you're a hotel, resort, or hospitality client, we cater to your specific needs, providing reliable sourcing solutions for exceptional guest experiences. Explore our offerings and redefine hospitality excellence with us.",
        icon: <FaGlassMartiniAlt className="productIcon" />,
        products: [
            "Hotel linens and bedding",
            "Towels and bathrobes",
            "Bathroom amenities",
            "Hotel furniture",
            "Room accessories",
            "Housekeeping supplies",
            "Tableware and cutlery",
            "Guestroom electronics",
            "Uniforms and staff apparel"
        ]
    }
]
const Product = () => {
    const { state } = useLocation();
    const selectedProduct = ProductDB.filter((product) => {
        return product.productName == state.productName.toUpperCase();
    })
    const { productName, description, icon, products, bg } = selectedProduct[0];
    return (
        <>
            <div className="productMenu menuContainer" id="top">
                <div className="menuBar">
                    {menuInfo.map((menu, key) => {
                        return <SingleMenuItem key={key} icon={menu.icon} link={menu.link} menuText={menu.menuText} />
                    })}
                </div>
                <SocialMediaMenu />
            </div>
            <div className="productBanner" style={{ backgroundImage: `url(${(bg)}` }}>{productName}</div>
            {/* <div className="productBanner" style={{ backgroundImage: `url(${(bg)}` }}>{productName}</div> */}

            <div className="productContainerIndividual" >
                <div className="productDescription">{description}</div>
                <div className="productIconContainer">{icon}
                    <div className="sectionHead"><span>Products</span></div></div>
                <div className="subProducts">
                    {products.map((product, index) => {
                        return <div data-aos="zoom-out" style={{ backgroundImage: `url("./${(product)}.jpg")` }} key={index} className="singleProductContainer">{product}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Product