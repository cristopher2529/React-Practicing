import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import MainHeader from '../../component/Routers/MainHeader';
import Welcome from '../../Pages/Welcome';
import Products from '../../Pages/Products';
import ProductDetail from '../../Pages/ProductDetail';

const Routers = () => {

    return (
        <div>
            <header>
                <MainHeader />
            </header>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path={'/welcome'} >
                        <Welcome />
                    </Route>
                    <Route path={'/products'} exact>
                        <Products />
                    </Route>
                    <Route path={"/products/:productId"}>
                        <ProductDetail />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default Routers;

// our-domain.com => Component A
// our-domain.com/products => Component B
// our-domain.com/product-detail/<any value> => Component C