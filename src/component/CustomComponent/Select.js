import React from "react";
import PropTypes from "prop-types";
import CreatebleSelect from "react-select/creatable";
import {withStyles} from '@material-ui/core';
import Icon from './Icon';

const styles = theme => ({
  optionStyles : {
    display: 'flex', 
    width: '100%',
  },
  optionText:{
    flexBasis:'85%',
    display:'inline',
    textAlign: 'center',
    // backgroundColor:'red'
  },
  optionButtons :{
    flexBasis:'15%',
    padding: 'auto',
    width: '100%',
    display: 'none',
    cursor: 'pointer',
    // backgroundColor:'green',
    textAlign: 'right',
  },
  deleteButton:{
    width:'1.1em',
    height:'1.1em',
    marginTop: '70%',
    float:'right',
    // backgroundColor:'blue',
  }
});

const customOptionStyle = {
  option: (style, {data, isDisabled, isFocused, isSelected}) => {
    // console.log(style)
    return {
      ...style,
      "&:hover #react-select-options-buttons":{
        display:'inline'
      }
    }
  }

}

//onChange: __isNew__: true it will be send in onChange method as a value prop to indicate a new value
//onCreateOption: when want to do some backend things
const select = props => {
  const {
    classes,
    value,
    onChange,
    options,
    onInputChange,
    onCreateOption,
    isClearable,
    Multi,
    setOptionValue,
    setOptionLabel,
    defaultValue,
    onClickDeleteOption,
    ...othersProps
  } = props;

  console.log(props);
  
  const optionLabel = option => option[setOptionLabel || "label"];
  const optionValue = option => option[setOptionValue || "value"];

  const formatOptionLabel = onClickDeleteOption ? ({value, text}) => (
      <div className={classes.optionStyles}>
          <div className={classes.optionText}>{text}</div>
          <div id="react-select-options-buttons" className={classes.optionButtons}>
            {onClickDeleteOption && 
              <Icon 
                className={classes.deleteButton} 
                iconName='DeleteForever' 
                onIconClick={e => onClickDeleteOption(e, value, text)}/>
              }
          </div>
      </div>
  ): null;
  
  return (
    <CreatebleSelect
      getOptionLabel={optionLabel}
      getOptionValue={optionValue}
      formatCreateLabel={inputValue => `Create ${inputValue}`}
      getNewOptionData={(inputValue, optionLabel) => ({
        [setOptionValue || "value"]: inputValue,
        [setOptionLabel || "label"]: optionLabel
      })}
      onInputChange={onInputChange}
      onCreateOption={onCreateOption}
      isClearable={isClearable}
      isMulti={Multi}
      options={options}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      formatOptionLabel={formatOptionLabel}
      styles={customOptionStyle}
      {...othersProps}
    />
  );
};

select.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.any.isRequired,
  onInputChange: PropTypes.func,
  onCreateOption: PropTypes.func,
  isClearable: PropTypes.bool,
  Multi: PropTypes.bool,
  setOptionLabel: PropTypes.string,
  setOptionValue: PropTypes.string,
  defaultValue: PropTypes.any,
  onClickDeleteOption: PropTypes.func
};

export default withStyles(styles)(select);

//example
// state = {
//   selectReact: null,
//     options: [
//       { label: 'Australia' },
//     { label: 'Austria' },
//     { label: 'Azerbaijan' },
//     ].map(option => ({
//       value: option.label,
//       label: option.label
//     }))
// }

// onChangeSelectHandler = name => value => {
//   console.log("[onChangeSelectHandler]", name, value);

//   this.setState({ [name]: value }, () =>{
//     console.log(this.state.selectReact);

//   });
// }

// handleCreateOption = inputValue => {
//   console.log("[handleCreate]",inputValue);
//   this.setState(prevState => {
//     const newValue = {value: inputValue, label: inputValue};
//     return {
//       selectReact: [...prevState.selectReact, newValue],
//       options: [newValue, ...prevState.options]
//     }
//   });
// }

// <Select
//   value={this.state.selectReact}
//   onChange={this.onChangeSelectHandler("selectReact")}
//   options={this.state.options}
//   onCreateOption={this.handleCreateOption}
//   Multi
//   onClickDeleteOption={(...arg) => console.log(arg) }
// />

//if is not MULTI
// handleCreateOption = inputValue => {
//   console.log("[handleCreate]",inputValue);
//   this.setState(prevState => {
//     const newValue = {value: inputValue, label: inputValue};
//     return {
//       selectReact: newValue,//////
//       options: [newValue, ...prevState.options]
//     }
//   });
// }
