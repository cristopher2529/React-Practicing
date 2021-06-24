import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux';
// import {uiActions} from '../../store/ui-slice';
import {sendCartData, fetchCartData} from '../../store/cart-actions';

import Cart from '../../component/ReduxDeeperUdemy/Cart/Cart';
import Layout from '../../component/ReduxDeeperUdemy/Layout/Layout';
import Products from '../../component/ReduxDeeperUdemy/Shop/Products';
import Notification from '../../component/ReduxDeeperUdemy/UI/Notification';

let isInitial = true;

const ReduxDeeperUdemy = props => {
    const cartIsVisible = useSelector(state => state.ui.cartIsVisivle);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    },[dispatch]);

    useEffect(()=>{

        //to no return 
        if(isInitial){
            isInitial= false;
            // dispatch(fetchCartData());
            return;
        }

        //thunk - actionCreator
        console.log(cart);
        if(cart.changed)
            dispatch(sendCartData(cart));

    },[cart,dispatch]);


    return (
        <React.Fragment>
            {notification && <Notification 
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Layout>
            {cartIsVisible && <Cart />}
            <Products />
            </Layout>
        </React.Fragment>
    );
}

export default ReduxDeeperUdemy;