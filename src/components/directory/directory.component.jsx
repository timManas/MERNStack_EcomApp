import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

// Collective view of all the different menu's
class Directory extends React.Component {
  constructor() {
    super();

    // This contains all the images to the different sections
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  // render() {
  //   // This takes the values from the state and prints them out using destructuring
  //   // {title, imageURL, id} are passed in as arguments as can be invoked in the function
  //   return (
  //     <div className="directory-menu">
  //       {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
  //         <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
  //       ))}
  //     </div>
  //   );
  // }

  render() {
    // This takes the values from the state and prints them out using destructuring
    // {title, imageURL, id} are passed in as arguments as can be invoked in the function
    // We use an ES6 trick here 
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionsProps}) => (
          <MenuItem key={id} {...otherSectionsProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;