import React from "react";
import "./menu-item.styles.scss";

// The menu item is the single block within the Directory
// We will pass in style for the background Image
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;

/**

- We moved the styling on the containing div "" onto the child div is because we want the image 
to get bigger within the contrains of our containing div when we hover over it 

 */
