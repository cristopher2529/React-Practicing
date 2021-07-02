import React, { Suspense } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import LoadingSpinner from '../../component/RouterDemo/ui/LoadingSpinner';
import AllQuotes from '../../Pages/AllQuotes';
import Layout from '../../component/RouterDemo/layout/Layout';
// import QuoteDetail from '../../Pages/QuoteDetail';
// import NotFound from '../../Pages/NotFound';
// import NewQuote from '../../Pages/NewQuote';
const NewQuote = React.lazy(() => import('../../Pages/NewQuote'));
const NotFound = React.lazy(() => import('../../Pages/NotFound'));
const QuoteDetail = React.lazy(() => import('../../Pages/QuoteDetail'));

const RouterDemo = () => {

    return (
        <Layout>
            <Suspense
                fallback={
                    <div className='centered'>
                        <LoadingSpinner />
                    </div>
                }>
                <Switch >
                    <Route path="/" exact>
                        <Redirect to="/quotes" />
                    </Route>
                    <Route path="/quotes" exact>
                        <AllQuotes />
                    </Route>
                    <Route path="/quotes/:quoteId">
                        <QuoteDetail />
                    </Route>
                    <Route path="/new-quote">
                        <NewQuote />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch >
            </Suspense>
        </Layout>
    );
}

export default RouterDemo;