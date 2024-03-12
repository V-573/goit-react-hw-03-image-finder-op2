import React from 'react';
import {
  HeaderConteiner,
  Input,
  SearchButton,
  Header

} from './searchBarStyle'

const SearchBar = ({ keyword, setKeyword, handleSearch }) => {
  return (
     <Header>

    <HeaderConteiner>
      <Input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Enter keyword"
        />
      <button onClick={handleSearch}>Search</button>
    </HeaderConteiner>
        </Header>
  );
};

export default SearchBar;
