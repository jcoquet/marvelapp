import React from 'react'
import { Link } from "react-router-dom";

const View = ({ character }) => (
  <div>
    <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
         alt={character.name} />
    <Link to={`/${character.id}`}>{character.name}</Link>
  </div>
)

export default View