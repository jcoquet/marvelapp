import React from 'react';
import { Link } from "react-router-dom";
import Switch from '../bookmarks/Switch';

const View = ({ character }) => (
  <div>
    <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
      alt={character.name} />
    <Link to={`/${character.id}`}>{character.name}</Link>
    <Switch character={character} />
  </div>
)

export default View