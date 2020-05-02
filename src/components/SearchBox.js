import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    console.log('searchbox')
    return ( 
    <div className = 'pa2' >
        <label for="robot"> search robots </label>
        <input className = 'pa3 ba b--green bg-lightest-blue'
        type = 'search'
        name='robot'
        id="robot"
        
        onChange = {searchChange}
        /> 
    </div>
    )
}

export default SearchBox;