import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem}) => {

    const {name, price, imageUrl} = item    

    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted >
                Add to Cart
            </CustomButton>
        </div>
    );
}

// Creating this prop called addItem  that will go into CollectionItem above
// Wwhenever we dispatch, it will pass in addItem which gives us an object where the type is addObjet with payload
// and dispatch it into our store and go through redux flow
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);