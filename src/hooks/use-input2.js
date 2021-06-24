import { useReducer } from "react";

const initialValueState={
    value:'',
    touched:false
}

const valueStateReducer = (state, action) =>{

    switch (action.type) {
        case 'INPUT':
            return{
                value:action.value, touched: action.touched
            }
        case 'BLUR':
            return{
                touched:true, value: state.value
            }
        case 'RESET':
            return{
                value: '', touched: false
            }
        default:
            break;
    }

    return initialValueState;
}

const useInput2 = (validFunction) => {
    const [valueState, dispatchValue] = useReducer(valueStateReducer, initialValueState);


    // const [value, setValue] = useState('');
    // const [touched, setTouched] = useState(false);

    const isValid = validFunction(valueState.value);
    const hasError = !isValid && valueState.touched;

    const valueChangeHandler = event => {
        dispatchValue({
            type:'INPUT',
            value: event.target.value
        })
        // setValue(event.target.value);
    }

    const valueBlurHandler = () => {
        dispatchValue({
            type:'BLUR'
        });
        // setTouched(true);
    }

    const reset = () => {
        dispatchValue({
            type:'RESET'
        })
        // setValue('');
        // setTouched(false);
    }

    return {
        value:valueState.value,
        isValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useInput2;