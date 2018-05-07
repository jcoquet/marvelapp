import React, { Component } from 'react'
import { MAX_COMICS_DISPLAYED } from '../../constants';
import Switch from '../bookmarks/Switch';
import { withRouter } from 'react-router';

class View extends Component {

  componentWillUnmount() {
    this.props.unsetCurrentCharacter();
  }

  componentDidMount() {
    this.props.fetchHeroById(this.props.characterId);
  }

  render() {

    const { character } = this.props;

    // Nothing to render if the character is null
    // The loading state is shown by the toaster
    if (character === null) return null;

    // The requested character id doesn't exists
    if (character === false) return (
      <p className="wrap">Oops, nothing to show.<br />sorry :)<br />Please try another page.</p>
    )

    const comics = character.comics.items.slice(0, MAX_COMICS_DISPLAYED);

    const comicsItem = comics.map((comic, index) =>
      <li key={index}>{comic.name}</li>
    )

    return (
      <div className="wrap single">
        <a className="button back-button" onClick={this.props.history.goBack}>Back</a>
        <h1>{character.name}<Switch character={character} /></h1>
        <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
          alt={character.name} />
        <div className="col">
          <p>{character.description}</p>
          {character.comics.available > 0 &&
            <div>
              Appears in {character.comics.available} commics :
              <ul>
                {comicsItem}
              </ul>
            </div>}
        </div>
      </div>
    )

  }

}

export default withRouter(View)