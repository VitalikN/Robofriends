import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    console.log('searchbox')
    return ( 
    <div className = 'pa2' >
        <label> </label>
        <input className = 'pa3 ba b--green bg-lightest-blue'
        type = 'search'
        placeholder = 'search robots' 
        onChange = {searchChange}
        /> 
    </div>
    )
}

export default SearchBox;