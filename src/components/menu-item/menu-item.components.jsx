import React from "react";
import './menu-item.styles.scss'

// The menu item is the single block within the Directory
// We will pass in style for the background Image 
const MenuItem = ({title,imageUrl, size}) => (
  <div 
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
  className={`${size} menu-item`}>

    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem
