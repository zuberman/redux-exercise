export function setSearchString(searchString){
  return {
    type: 'SET_SEARCH_STRING',
    searchString
  };
};

export function receiveCharacters(result){
  return {
    type: 'RECEIVE_CHARACTERS',
    characters: result
  };
};

export function setCategory(category){
  return {
    type: 'SET_CATEGORY',
    category
  };
};

export function fetchCharacters(searchString, category){
  return function(dispatch, getState){
    fetch(`https://swapi.co/api/${category}/?search=${searchString}`)
    .then(response => response.json())
    .then(result => {
      dispatch(receiveCharacters(result.results))
      dispatch(setSearchString(''))
    })
    .catch(function(error) {
      // something went wrong. let's sort it out
    });
  }
}
