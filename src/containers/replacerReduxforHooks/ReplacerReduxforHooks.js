import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ProductsProvider from '../../context/products-context';

import Navigation from '../../component/replacerReduxforHooks/Navigation';
import ProductsPage from '../../component/replacerReduxforHooks/Products';
import FavoritiesPage from '../../component/replacerReduxforHooks/FavoritiesPage';

import configureProductsStore from '../../hooks-store/products-store';
configureProductsStore();

const ReplacerReduxforHooks = () => {
    return <React.Fragment>
        <ProductsProvider>
            <Navigation />
            <main>
                <Switch>
                    <Route path="/" component={ProductsPage} exact />
                    <Route path="/favorites" component={FavoritiesPage} />
                </Switch>
            </main>
        </ProductsProvider>
    </React.Fragment>
}

export default ReplacerReduxforHooks;