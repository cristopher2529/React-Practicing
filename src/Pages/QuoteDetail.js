import React, { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../component/RouterDemo/comments/Comments';
import HighlightedQuote from '../component/RouterDemo/quotes/HighlightedQuote';
import LoadingSpinner from '../component/RouterDemo/ui/LoadingSpinner';

import useHttp from '../hooks/use-http-route';
import { getSingleQuote } from '../lib/api';

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Cris', text: 'Learning React is fun!' },
//     { id: 'q2', author: 'Max', text: 'Learning React is great!' },
//     { id: 'q3', author: 'Elias', text: 'Learning React is awesome!' }
// ];

const QuoteDetail = props => {
    const params = useParams();
    const routeMatch = useRouteMatch();
    // console.log(routeMatch);

    const { quoteId } = params;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>;
    }

    if (error) {
        return <p className="centered">{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No quote found</p>
    }

    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    // if (!quote)
    //     return <h1>No quote found!</h1>

    return (
        <Fragment>
            {/* <h1>Quotes Detail Page</h1>
            <p>{params.quoteId}</p> */}
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={routeMatch.path} exact>
                <div className="centered">
                    {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
                    <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            {/* <Route path="/quotes/:quoteId/comments"> */}
            <Route path={`${routeMatch.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;