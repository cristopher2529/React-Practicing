import React,{ useState} from 'react';

const AuthContext = React.createContext({
    token:'',
    isLogginIn:false,
    login: (token) => {},
    logout: () => {}
}); 

let logoutTimer;

const calculateRemainingTime = expirationTime => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainigDuration = adjExpirationTime - currentTime;
    return remainigDuration;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem("expirationTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate)
    if(remainingTime <= 60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }        

    return {token:storedToken, duration: storedExpirationDate};
}

export const AuthContextProvider = props => {
    const tokenData = retrieveStoredToken();
    const initialToken = (tokenData) ? tokenData.token : null;
    const [token, setToken] = useState(initialToken);
    let userIsLoggedIn = !!token;
    console.log("auth-context",userIsLoggedIn, token);
    
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");

        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
    }

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem("token",token);
        localStorage.setItem("expirationTime", expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);
        console.log("Login remainingTime", remainingTime, expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    }

    // useEffect(() => {
    //     if(tokenData){
    //         console.log(tokenData);
    //         logoutTimer =  setTimeout(logoutHandler, tokenData.duration);
    //     }
    // }, [tokenData])

    const contextValue = {
        token: token,
        isLogginIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;