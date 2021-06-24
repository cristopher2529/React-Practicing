import React from 'react';

import ForwardCounter from '../../component/Counter/ForwardCounter';
import BackwardCounter from '../../component/Counter/BackwardCounter';

const Counter = props => {

    return <React.Fragment>
        <ForwardCounter />
        <BackwardCounter />
    </React.Fragment>;
}

export default Counter;