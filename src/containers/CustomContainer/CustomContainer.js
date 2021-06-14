import React from 'react';

import Select from '../../component/CustomComponent/Select';

class CustomContainer extends React.Component{

    state = {
        host: '',
        optionsSingle: [
            {value: '1', text: '1'},
            {value: '2', text: '2'},
            {value: '3', text: '3'},
            {value: '4', text: '4'},
        ]
    }

    handleSelectChange = value =>{
        console.log(value);
        
        this.setState({ host: value })
    }

    handleAddItemSelect = inputValue => {
        this.setState(prevState => {
            const newValue = {value: inputValue, text: inputValue};
            
            return {
                host: newValue,
                optionsSingle: [newValue, ...prevState.optionsSingle]
            }
        });
    }

    render(){
        return(
            <div>
                <h1>CustomContainer</h1>
                <Select 
                    value={this.state.host}
                    options={this.state.optionsSingle}
                    onChange={this.handleSelectChange}
                    onCreateOption={this.handleAddItemSelect}
                    setOptionLabel={"text"}
                    name="host"
                    isClearable
                    className="login-form-margin"
                    onClickDeleteOption={(...arg) => console.log(arg) }
                />
            </div>
        );
    }
}

export default CustomContainer;