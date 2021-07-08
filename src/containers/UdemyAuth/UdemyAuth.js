import React from 'react';
import Layout from '../../component/UdemyAuth/Layout/Layout';

import AuthRoutes from './AuthRoutes';
import { AuthContextProvider } from '../../store/auth-context';


const UdemyAuth = () => {
    
    return <AuthContextProvider>
        <Layout >
            {/* <h1>React Auth Udemy</h1> */}
            <AuthRoutes />
        </Layout>;
    </AuthContextProvider>
    
}

export default UdemyAuth;