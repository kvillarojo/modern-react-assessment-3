import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './App'
import {PostDetails} from "./PostDetails";

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Route path="/"  exact component={App} />
            <Route path="/post" exact component={PostDetails} />
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
