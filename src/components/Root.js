import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import CharacterList from './list/Hoc';
import CharacterDetail from './detail/Hoc';
import Bookmarks from './bookmarks/Hoc';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={CharacterList} />
                    <Route path="/bookmarks" component={Bookmarks} />
                    <Route exact path="/:id" component={CharacterDetail} />
                    <Route path="/page/:num" component={CharacterList} />
                </Switch>
            </App>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root