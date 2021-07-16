import React, { useContext, Fragment } from 'react';
import classes from './Products.module.css';

import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

import {ProductsContext} from '../../context/products-context';

import useStore from '../../hooks-store/store';

const Products = props =>{
    const productListContext = useContext(ProductsContext).products;
    const productList = useSelector(state => state.shop.products);

    const storeProducts = useStore()[0].products;

    return (
      <Fragment>
        <ul className={classes["products-list"]}>
          {storeProducts.map(prod => (
            <ProductItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              isFav={prod.isFavorite}
              isCustomStore
            />
          ))}
        </ul>
        <br /><br />
        <ul className={classes["products-list"]}>
          {productListContext.map(prod => (
            <ProductItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              isFav={prod.isFavorite}
              isWithContext
            />
          ))}
        </ul>
        <br /><br />
        <ul className={classes["products-list"]}>
          {productList.map(prod => (
            <ProductItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              isFav={prod.isFavorite}
            />
          ))}
        </ul>
      </Fragment>
      );
}

export default Products;