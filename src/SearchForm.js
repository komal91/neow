import React from 'react';

import './SearchForm.css';

function SearchForm(props) {

const {
    
    handleSetStartDate,
    handleSearchApi
} = props
    return (
        <div className="searchForm">
            <h3>
            Search Date
            </h3>
            
            <form onSubmit={handleSearchApi}>

                <input type="date" onInput={handleSetStartDate}></input>
                <input type="submit" value="Search!"></input>
            </form>
        </div>
    )
}

export default SearchForm
