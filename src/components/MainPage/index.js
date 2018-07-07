import React from 'react';
import MainSearch from '../MainSearch';

export default class MainPage extends React.Component {
    state = {
        data: null
    };

    render() {
        return (
            <MainSearch />
        );
    }
}