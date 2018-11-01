import React from 'react';

function Search({handleChange, searchString, submitSearch, handleChangeCategory, category }){
return (
  <div>
    <form onSubmit={(event) => submitSearch(event, searchString, category) }>
      <input
      type="text"
      onChange={(event) => handleChange(event.target.value)}
      value={searchString}
      />
    <select onChange={(event) => handleChangeCategory(event.target.value)}>
      <option value="people">People</option>
      <option value="vehicles">Vehicles</option>
      <option value="planets">Planets</option>
      <option value="films">Films</option>
      <option value="species">Species</option>
      <option value="starships">Starships</option>
    </select>
    </form>
  </div>
)

}

export default Search
