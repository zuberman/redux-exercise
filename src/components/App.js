import React from 'react';
import SearchContainer from '../containers/SearchContainer.js'
import CharacterResultContainer from '../containers/CharacterResultContainer.js'

class App extends React.Component {
  render(){
    return (
      <div>
        Content goes here
        <SearchContainer />
        <CharacterResultContainer />
      </div>
    )
  }
}

export default App;
