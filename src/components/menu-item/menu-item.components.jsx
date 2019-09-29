import React from "react";
import "./menu-item.styles.scss";

import {withRouter} from 'react-router-dom' 

// The menu item is the single block within the Directory
// We will pass in style for the background Image
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
  <div 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

// export default MenuItem;
export default withRouter(MenuItem);  //withRouter will return back a component with the same name with access to specific locations  and history props

/**

- We moved the styling on the containing div "" onto the child div is because we want the image 
to get bigger within the contrains of our containing div when we hover over it 

 */
