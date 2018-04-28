import * as actions from '../actions';

describe('actions', () => {
    it('should create an action to get heroes', () => {
        const json = {}
        const expectedAction = {
            type: actions.GET_CHARACTERS,
            json
        }
        expect(actions.getCharacters(json)).toEqual(expectedAction)
    })

    it('should create an action to get one hero', () => {
        const json = {}
        const expectedAction = {
            type: actions.GET_CHARACTER,
            json
        }
        expect(actions.getCharacter(json)).toEqual(expectedAction)
    })

    it('should create an action to unset the current hero', () => {
        const expectedAction = {
            type: actions.UNSET_HERO,
        }
        expect(actions.unsetCurrentCharacter()).toEqual(expectedAction)
    })

    it('should create an action to pop a message', () => {
        const text = 'message';
        const expectedAction = {
            type: actions.MESSAGE,
            text
        }
        expect(actions.message(text)).toEqual(expectedAction)
    })
})