import React from 'react';

function CharacterResults({ results }) {
  return (
    <div>
      <ul>
      {results.map( character => {
        return (
          <li key={character.name}>
            <h2>{character.name}</h2>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default CharacterResults
