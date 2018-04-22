import React from 'react'
//import PropTypes from 'prop-types'
import Character from '../item/Hoc'

const View = ({ characters, onCharacterClick }) => (
    <ul>
        {characters.length > 0 && characters.map((character, index) => (
            <Character key={index} character={character} onClick={() => onCharacterClick(index)} />
        ))}
    </ul>
)

// CharacterList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default View