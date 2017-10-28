import React from 'react';
import PropTypes from 'prop-types';
import Home from '../pages/Home/Home';

class ContextProvider extends React.Component {
    static childContextTypes = {
        insertCss: PropTypes.func,
    };

    getChildContext() {
        return { ...this.props.context }
    }

    render () {
        return <Home { ...this.props } />
    }
}

export default ContextProvider;