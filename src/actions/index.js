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

export function fetchCharacters(searchString){
  return function(dispatch, getState){
    fetch(`https://swapi.co/api/people/?search=${searchString}`)
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
