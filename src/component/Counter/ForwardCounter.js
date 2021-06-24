import React from 'react';

import Card from '../UI/Card/Card';
import useCounter from '../../hooks/use-counter';

const ForwardCounter = props => {
    const customHook = useCounter((value) => value+1);

    return <Card>{customHook}</Card>;
}

export default ForwardCounter;