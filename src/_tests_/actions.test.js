import * as c from '../constants';
import * as actions from '../actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock/es5/server';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let test = async function() {}

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

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates GET_CHARACTERS when fetching heroes', () => {
        fetchMock
            .getOnce(`begin:${c.API}${c.CHARACTERS}`, { body: { code: 200 } })


        const expectedActions = [
            { type: actions.GET_CHARACTERS, json: { code: 200 } }
        ]
        const store = mockStore({ characters: [] })

        return store.dispatch(actions.fetchCharacters()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates MESSAGE when it fails to fetch one hero (API 401)', () => {
        fetchMock
            .getOnce(`begin:${c.API}${c.CHARACTERS}`, { body: { code: 401 }})


        const expectedActions = [
            { type: actions.MESSAGE, text: '' }
        ]
        const store = mockStore({ character: [] })

        return store.dispatch(actions.fetchCharacters()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates MESSAGE when it fails to fetch one hero (HTTP 401)', () => {
        fetchMock
            .getOnce(`begin:${c.API}${c.CHARACTERS}`, { status: 401 })


        const expectedActions = [
            { type: actions.MESSAGE, text: 'Unauthorized' }
        ]
        const store = mockStore({ character: [] })

        return store.dispatch(actions.fetchCharacters()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates GET_CHARACTER when fetching one hero', () => {
        fetchMock
            .getOnce('*', { body: { code: 200 }})


        const expectedActions = [
            { type: actions.GET_CHARACTER, json: { code: 200 } }
        ]
        const store = mockStore({ character: [] })

        return store.dispatch(actions.fetchCharacter(475683)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates MESSAGE when it fails to fetch one hero (API 401)', () => {
        fetchMock
            .getOnce('*', { body: { code: 401 }})


        const expectedActions = [
            { type: actions.MESSAGE, text: '' }
        ]
        const store = mockStore({ character: [] })

        return store.dispatch(actions.fetchCharacter(475683)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates MESSAGE when it fails to fetch one hero (HTTP 401)', () => {
        fetchMock
            .getOnce('*', { status: 401 })


        const expectedActions = [
            { type: actions.MESSAGE, text: 'Unauthorized' }
        ]
        const store = mockStore({ character: [] })

        return store.dispatch(actions.fetchCharacter(475683)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})