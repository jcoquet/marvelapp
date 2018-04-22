import React from 'react'

const View = ({ character }) => (
  <div>
    <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
         alt={character.name} />
    {character.name}
  </div>
)

export default View