import React,{useState,useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: (email, password) => {}
  });

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('isLoggedIn')
    
        if(storedUserLoggedIn === '1')
          setIsLoggedIn(true)
      },[])

    const logoutHandler = () =>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    }

    const loginHandler = () =>{
        localStorage.setItem('isLoggedIn','1')
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider
        value={{
            isLoggedIn:isLoggedIn,
            onLogin:loginHandler,
            onLogout:logoutHandler
        }}
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;




/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
                     
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * /
var twoSum = function(nums, target) {
    
    let result = [];
    for (let index = 0; index < nums.length; index++) {
        for (let i = index+1; i < nums.length; i++) {
            if(i != nums[index] && nums[index]+nums[i] == target)
                result.push({index1: index,index2: i});
        }
    }
    
    return result;
};

var twoSum2 = function(nums, target) {
    

    for (let index = 0; index < nums.length; index++) {
        for (let i = index+1; i < nums.length; i++) {
            if(i != nums[index] && nums[index]+nums[i] == target)
                return {index1: index,index2: i};
        }
    }
    
    return null;
};
*/