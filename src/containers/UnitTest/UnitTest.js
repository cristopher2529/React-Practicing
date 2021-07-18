import React from 'react';

import Greeting from '../../component/UnitTest/Greeting';
import Async from '../../component/UnitTest/Async';

const  UnitTest = () =>{

    return <div>
        <h1>Unit Test</h1>
        <Greeting />
        <br />
        <br />
        <br />
        <Async />
    </div>
}

export default UnitTest;