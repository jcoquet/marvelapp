import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import CharacterList from './list/Hoc';
import CharacterDetail from './detail/Hoc';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={CharacterList} />
                    <Route path="/:id" component={CharacterDetail} />
                </Switch>
            </App>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root