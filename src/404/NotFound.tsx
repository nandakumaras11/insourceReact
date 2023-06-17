import "./NotFound.css"
import logo from "../images/logow.png"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
const NotFound = () => {
  return (
    <div className="notFoundContainer">
       <div className="errorLogo"><Link to="/"><img loading="lazy" src={logo}/></Link></div> 
        <div className="errorCode">404</div>
        <div className="errorDescription">Requested page is not available</div>
        <div className="gotoHome"><Link to="/" className="gotoHomeBtn">Goto Home<FaHome/> </Link></div>
    </div>
  )
}

export default NotFound