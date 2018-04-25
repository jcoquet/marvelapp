import React, { Component } from 'react'
import { MAX_COMICS_DISPLAYED } from '../../constants';

class View extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     character: {}
  //   }

  // }

  componentWillUnmount() {
    this.props.unsetCurrentCharacter();
  }

  componentDidMount() {
    this.props.fetchHeroById(this.props.characterId);
  }

  render() {

    const { character } = this.props;

    if (character === null) return (
      <p>Loading...</p>
    )

    const comics = character.comics.items.slice(0, MAX_COMICS_DISPLAYED);

    const comicsItem = comics.map((comic, index) =>
      <li key={index}>{comic.name}</li>
    )

    return (
      <div>
        <h1>{character.name}</h1>
        <p>{character.description}</p>
        <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
          alt={character.name} />
        <span>Appears in{character.comics.available} commics</span>
        <ul>
          {comicsItem}
        </ul>
      </div>
    )

  }

}

export default View