import React from 'react';

function Search({handleChange, searchString, submitSearch }){
return (
  <div>
    <form onSubmit={(event) => submitSearch(event, searchString) }>
      <input
      type="text"
      onChange={(event) => handleChange(event.target.value)}
      value={searchString}
      />
    </form>
  </div>
)

}

export default Search
