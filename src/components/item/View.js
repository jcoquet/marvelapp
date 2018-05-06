import React from 'react';
import { Link } from "react-router-dom";
import Switch from '../bookmarks/Switch';

const View = ({ character }) => (
  <li>
    <Link to={`/${character.id}`}>
      <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
        alt={character.name} />
      <span className="name">{character.name}</span>
    </Link>
    <Switch character={character} />
  </li>
)

export default View