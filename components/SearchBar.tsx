"use client";

import {SearchManufacturer } from "./";
import { useState } from 'react';

const SearchBar = () => {
  const[manufacturer, setManufasturer] = useState('');
const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit= {handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
        manufacturer={manufacturer}
        setManufacturer={setManufasturer}
        />

      </div>

    </form>
  )
}

export default SearchBar