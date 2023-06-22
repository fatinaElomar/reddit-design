import React from 'react'
import Logo from "../../images/logo.png";
import PrimarySearchAppBar from '../search/search';
import "./header.css";
function Header() {
  return (
    <div>
        <div className="header-re">
            <div className="header-img-container">
        <img  className="Logo-re" src={Logo} alt=""/></div>
        <div className="header-seach-re">
           {/* <PrimarySearchAppBar/> */}
        </div>
        <div className="header-last-container">
            hhh
        </div>
     </div>
    </div>
  )
}

export default Header
