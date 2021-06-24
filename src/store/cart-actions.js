import {uiActions} from './ui-slice';
import {cartActions} from './cart-slice'; 

export const fetchCartData =() => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status:'pendind',
            title:'Sending...',
            message: 'Fetching cart data!'
        }));

        const fetchData = async () => {
            const response = await fetch('https://react-http-64b0d-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Something went wrong fetching data!!');
            }

            const responseData = await response.json();
            return responseData;
        }

        try {
            const cartData = await fetchData();

            dispatch(cartActions.replacerCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
                totalAmount: cartData.totalAmount || 0
            }));

            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success!',
                message: 'Fetch cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message: error.message
            }));
        }

    }
}

export const sendCartData = (cart) =>{
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status:'pendind',
            title:'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async ()=>{
            const response = await fetch('https://react-http-64b0d-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                    totalAmount: cart.totalAmount
                })
            });
    
            if(!response.ok){
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success!',
                message: 'Sent cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message: error.message
            }));
        }
    }
};