import React from 'react';
import classes from './Counter.module.css';

import {useSelector,useDispatch} from 'react-redux';
import {counterActions} from '../../store/counter-slice';


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const toggleCounterHandler = () => {
        // dispatch({type:'toggleCounter'})
        dispatch(counterActions.toggleCounter());
    };
    
    const incrementHandler = () =>{
        // dispatch({type: 'increment'});
        dispatch(counterActions.increment());
    }
    const decrementHandler = () =>{
        // dispatch({type: 'decrement'});
        dispatch(counterActions.decrement());
    }
    const increaseHandler = (amount) => {
        // dispatch({type:'increase',amount: amount});
        dispatch(counterActions.increase({amount: amount}));
    }

    return <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {showCounter && <React.Fragment>
        <div className={classes.value}>{counter}</div>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={() => increaseHandler(5)}>Increment by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        </React.Fragment>}
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>;   
}

export default Counter;



// import {connect} from 'react-redux';

// class Counter2 extends React.Component{

//     toggleCounterHandler = () => {};

//     incrementHandler = () =>{
//         this.props.increment();
//     }
//     decrementHandler = () =>{
//         this.props.decrement();
//     }

//     render(){
//         return <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                 <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                 <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     };
// }

// const mapStateToProps = state =>{
//     return {
//         counter: state.counter
//     };
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'}),
//     };
// }

// export connect(mapStateToProps, mapDispatchToProps)(Counter2)
// export {Counter2};