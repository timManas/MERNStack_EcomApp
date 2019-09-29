import React from "react";
import SHOP_DATA from "./shop.data.js"; //get the shop data ...Note: in the future this would be coming in from the database
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
    return (<div className='shop-page'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </div>)
  }
}

export default ShopPage
