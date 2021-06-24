import React from 'react';

import SimpleInput from '../../component/Forms/SimpleInput';
import BasicForm from '../../component/Forms/BasicForm';

const Forms = props => {

    const style = {
        width: '90%',
        maxWidth: '43rem',
        padding: '1rem',
        borderRadius: '12px',
        backgroundColor: 'white',
        margin: '3rem auto',
      }

    return (
        <div className="forms" style={style}>
            {false && <SimpleInput />}
            {true && <BasicForm />}
        </div>
    );
}

export default Forms;