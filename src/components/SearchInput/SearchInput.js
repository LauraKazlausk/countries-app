
import React, { useState } from 'react';
import './SearchInput.css'

const SearchInput = ({onSearch}) => {

    const [input, setInput] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        onSearch(input);
    }
  return (
    <form className='search-input-form' onSubmit={submitHandler}>
        <input type='text' placeholder='Search for a country...' value={input} onChange={(e)=> setInput(e.target.value)} />
    </form>
  )
}

export default SearchInput