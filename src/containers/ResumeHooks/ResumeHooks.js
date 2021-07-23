import React from 'react';

import AuthContextProvider, {AuthContext} from '../../context/auth2-context';

import Ingredients from '../../component/ResumeHooks/Ingredients/Ingredients';
import Auth from '../../component/ResumeHooks/Auth';

const ResumeHooks = props => {
    // const authContext = useContext(AuthContext);

    return (
        <div style={{backgroundColor:"white"}}>
            <AuthContextProvider>
                <AuthContext.Consumer>
                    {({isAuth}) => { 
                        let content = <Auth />;
                        if(isAuth){
                            content = <Ingredients />
                        }

                        return content;
                    }}
                </AuthContext.Consumer>
            </AuthContextProvider>
        </div>
    );
}

export default ResumeHooks;