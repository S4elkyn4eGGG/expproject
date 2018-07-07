import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class Components extends React.Component {
    state = {
        data: null
    };
    render() {
        return(
            <div>

                <Button variant={'contained'} color="primary" onClick={this.onClick.bind(this)}> New </Button>
            </div>
        );
    }
    componentWillMount = () => {

    };
    onClick = () => {

    }
}