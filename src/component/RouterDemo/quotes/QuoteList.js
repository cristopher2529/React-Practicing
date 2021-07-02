import React, { Fragment } from 'react';
import classes from './QuoteList.module.css';

import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
}


const QuoteList = props => {
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const isSortingAscending = queryParams.get('sort') === 'asc';

    const changeSortingHanlder = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
        });

        // history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
        // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);
        // console.log(location);
    }

    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

    return <Fragment>
        <div className={classes.sorting}>
            <button onClick={changeSortingHanlder}>
                Sort {isSortingAscending ? 'Decending' : 'Ascending'}
            </button>
        </div>
        <ul className={classes.list}>
            {sortedQuotes.map(quote => (
                <QuoteItem
                    key={quote.id}
                    id={quote.id}
                    author={quote.author}
                    text={quote.text}
                />
            ))};
        </ul>
    </Fragment>;
}

export default QuoteList;


