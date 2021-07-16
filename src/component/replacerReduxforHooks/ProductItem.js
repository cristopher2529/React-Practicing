import React, { useContext } from 'react';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import Card from './Card';
import {toggleFav} from '../../store/actions/products';

import { ProductsContext } from '../../context/products-context';

import useStore from '../../hooks-store/store';

const ProductsPage = React.memo((props) =>{
    const dispatch = useDispatch();
    const toggleFavContext = useContext(ProductsContext).toggleFav;
    const dispatchCustomStore = useStore(false)[1];

    const toggleFavHandler = ( ) => {
      if(props.isWithContext){
        toggleFavContext(props.id)
      }
      else if(props.isCustomStore){
        dispatchCustomStore('TOGGLE_FAV', props.id);
      }
      else{
        dispatch(toggleFav(props.id));
      }
    }

    return (
        <Card style={{ marginBottom: '1rem' }}>
          <div className={classes['product-item']}>
            <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
            <p>{props.description}</p>
            <button
              className={!props.isFav ? 'button-outline' : ''}
              onClick={toggleFavHandler}
            >
              {props.isFav ? 'Un-Favorite' : 'Favorite'}
            </button>
          </div>
        </Card>
      );
})

export default ProductsPage;