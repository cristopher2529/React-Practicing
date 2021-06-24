import React from 'react';

import Card from '../UI/Card/Card';
import useCounter from '../../hooks/use-counter';

const BackwardCounter = props => {
    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => setCounter(prevState => prevState - 1),1000)

    //     return () => clearInterval(interval);
    // },[])
    const counter =  useCounter(value => value - 1);

    return <Card>{counter}</Card>;
}

export default BackwardCounter;