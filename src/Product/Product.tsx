import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import bgauomobile from "../images/bgauomobile.jpg"
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
        products: ["Engine components", "Electrical parts", "Filters", "Fuel system parts", "Brake system components", "Cooling system parts", "Body and interior parts "]
    },
    {
        bg: bgauomobile,
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
        bg: bgauomobile,
        productName: "FOOD PRODUCTS",
        description: "Discover a world of flavors with our food products import and export services. We specialize in sourcing and delivering high-quality, delicious food products from around the globe. From exotic spices and gourmet ingredients to premium beverages and ready-to-eat snacks, we offer a diverse range of culinary delights. Our global network of suppliers ensures the freshest produce, strict quality standards, and timely delivery. Whether you're a distributor, retailer, or foodservice provider, we cater to your specific needs, providing exceptional sourcing solutions for your culinary business. Explore our extensive portfolio of delectable food products and embark on a culinary journey with us.",
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
            "Dairy products"
        ]
    },
    {
        bg: bgauomobile,
        productName: "MARINE PRODUCTS",
        description: "Welcome to our website, your gateway to exceptional marine products import and export. We specialize in sourcing and delivering a wide range of high-quality marine products from the depths of the sea. From fresh and frozen seafood to seaweed, fish oil, and shellfish, we offer a diverse selection of oceanic treasures. Our strict quality control ensures that our products meet the highest standards of freshness and taste. Whether you're a seafood distributor, restaurant, or culinary enthusiast, we cater to your specific needs, providing reliable sourcing solutions for the finest marine delicacies. Dive into our offerings and experience the bounty of the sea like never before.",
        icon: <FaFish className="productIcon" />,
        products: [
            "Fresh and frozen seafood",
            "Seaweed and sea vegetables",
            "   Fish oil and omega-3 supplements",
            " Shellfish ",
            "Caviar and roe",
            "Dried and smoked fish",
            "Squid and octopus",
            "Marine spices and seasonings",
            "Fish and shrimp feed"
        ]
    },
    {
        bg: bgauomobile,
        productName: "HOSPITALITY ITEMS",
        description: "Welcome to our website, your premier source for hospitality items import and export. We specialize in sourcing and delivering a wide range of high-quality products to elevate the hospitality experience. From luxurious hotel linens and bedding to premium toiletries, amenities, and hotel furniture, we offer a comprehensive selection of hospitality items. Our commitment to quality ensures that our products meet the highest standards of comfort, durability, and aesthetic appeal. Whether you're a hotel, resort, or hospitality supplier, we cater to your specific needs, providing reliable sourcing solutions for exceptional guest experiences. Explore our offerings and redefine hospitality excellence with us.",
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
    console.log(state)
    const selectedProduct = ProductDB.filter((product) => {
        return product.productName == state.productName.toUpperCase();
    })
    const { productName, description, icon, products, bg } = selectedProduct[0];
    return (
        <>
            <div className="productMenu menuContainer">
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
                        return <div style={{ backgroundImage: `url(${(bg)})` }} key={index} className="singleProductContainer">{product}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Product