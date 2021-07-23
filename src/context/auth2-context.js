import React, { useState } from "react";


export const AuthContext = React.createContext({
    isAuth: false,
    login: ()=>{}
});

const AuthContextProvider = props => { 
    const [isAuth, setIsAuth] = useState(false)

    const loginHandler = () =>{
        setIsAuth(true);
    }

    const logoutHandler = () =>{
        setIsAuth(false);
    }

    return <AuthContext.Provider value={{
        isAuth,
        login: loginHandler,
        logout: logoutHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContextProvider;