/*
Name
list
email
phone number
*/ 

import React, { useState } from 'react';
const DummyList = ['NY','LA','DR'];

const Interview = props =>{
    const [formData, setFormData] = useState({
        name:'',
        list:'',
        email:'',
        phoneNumber:''
    });
    const [error, setError] = useState(null);

    const onChangeHandler = (event, key) =>{
        setFormData(prevState => {
            return {
                ...prevState,
                [key]:event.target.value
            }
        })
    }
    
    const submitHandler = async (event) => {
        event.preventDefault();

        //Validations
        try{
            const status = await fetch("url/cities/city",{
                method:'POST',
                body:JSON.stringify(formData)
            });

            if(status !== '200'){
                setError('There was an error, sorry try later!');
            }

            
        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <form onSubmit={submitHandler}>
            {error && <section>
                <h1>{error}</h1>
            </section>}
            <section>
                <label>Name</label>
                <input type="text" value={formData.name} onChange={event => onChangeHandler(event,'name')}/>
            </section>
            <section onChange={event => onChangeHandler(event,'list')}>
                <select>
                    {DummyList.map(item => (<option key={item} value={item}>{item}</option>))}
                </select>
            </section>
            <section>
                <label>Email</label>
                <input type="email" value={formData.email} onChange={event => onChangeHandler(event,'email')}/>
            </section>
            <section>
                <label>Phone Number</label>
                <input type="text" value={formData.phoneNumber} onChange={event => onChangeHandler(event,'phoneNumber')}/>
            </section>
        </form>
    );
}

export default Interview;