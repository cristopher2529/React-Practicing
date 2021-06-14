import React,{useState} from 'react';

import Input from '../../component/UI/Input/Input';

const Ejemplo = () =>{
    const [text, setText] = useState();

    const changeTextHandler = event =>{
        setText(event.target.value)
    }

    return (
        <section>
            <Input
                style={{color:'white'}}
                id="example"
                isValid={true}
                label="Esto es un Ejemplo"
                type="text"
                value={text}
                onChange={changeTextHandler}
            />
            <br/>
            <h1>{text}</h1>
        </section>
    );

}
export default Ejemplo;