import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../component/RouterDemo/quotes/QuoteForm';
import useHttp from '../hooks/use-http-route';
import { addQuote } from '../lib/api';

const NewQuote = props => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history])

    const addQuoteHandler = quoteData => {
        console.log(quoteData);
        sendRequest(quoteData)
        // history.push("/quotes");
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    );
}

export default NewQuote;