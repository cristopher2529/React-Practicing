import React, { useContext } from 'react';
import classes from './Products.module.css';

import { useSelector } from 'react-redux';
import FavoriteItem from './FavoriteItem';

import { ProductsContext } from '../../context/products-context';

import useStore from '../../hooks-store/store'

const FavoritiesPage = props => {
    const favoriteProducts = useSelector(state => 
        state.shop.products.filter(p => p.isFavorite)  
    );

    const {products} = useContext(ProductsContext);
    const favoriteProdContext = products.filter(prod => prod.isFavorite === true);

    const favProdStore = useStore()[0].products.filter(prod => prod.isFavorite );

    let contentStore = null;
    if(favProdStore.length > 0){
      contentStore = (
        <ul>
        {favProdStore.map(prod => 
          <FavoriteItem 
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        )}
        </ul>
      );
    }

    let contentContext = null;
    if(favoriteProdContext.length > 0){
      contentContext = (
        <ul className={classes["products-list"]}>
          {favoriteProdContext.map(prod => (
            <FavoriteItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
            />
          ))}
        </ul>
      );
    }

    let content = <p className={classes.placeholder}>Got no Favorities yet!</p>
    if(favoriteProducts.length > 0){
        content = (
            <ul className={classes["products-list"]}>
              {favoriteProducts.map(prod => (
                <FavoriteItem
                  key={prod.id}
                  id={prod.id}
                  title={prod.title}
                  description={prod.description}
                />
              ))}
            </ul>
          );
    }

    return (<React.Fragment>
      {contentStore}
      {contentContext}
      {content} 
    </React.Fragment>)
}

export default FavoritiesPage;