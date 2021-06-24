import { useCallback, useState } from 'react';

const useHTTP = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const sendRequest = useCallback( async (requestConfig, applyDate) =>{
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(requestConfig.url,{
                method: requestConfig.method || 'GET',
                headers: requestConfig.headers || {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });

            if(!response.ok)
                throw new Error("Request failed.")
               
            const data = await response.json();
            applyDate(data);

        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    },[])

    return {
        isLoading,
        error,
        sendRequest,
    };
}

export default useHTTP;