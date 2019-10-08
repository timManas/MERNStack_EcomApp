import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

// Collective view of all the different menu's
const Directory = ({sections }) => (
  // This takes the values from the state and prints them out using destructuring
  // {title, imageURL, id} are passed in as arguments as can be invoked in the function
  // We use an ES6 trick here

  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
