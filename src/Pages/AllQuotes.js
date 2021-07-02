import React, { useEffect } from 'react';

import QuoteList from '../component/RouterDemo/quotes/QuoteList';
import useHttp from '../hooks/use-http-route';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../component/RouterDemo/ui/LoadingSpinner';
import NoQuotesFound from '../component/RouterDemo/quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Cris', text: 'Learning React is fun!' },
//     { id: 'q2', author: 'Max', text: 'Learning React is great!' },
//     { id: 'q3', author: 'Elias', text: 'Learning React is awesome!' }
// ];

const AllQuotes = props => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest, error]);

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }

    return (
        <QuoteList quotes={loadedQuotes} />
    );
}

export default AllQuotes;