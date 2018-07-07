import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import axios from 'axios';

export default class MainSearch extends React.Component {
    state = {
        data: null
    };

    onGoClick = () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds';
        axios.get(proxyUrl + url)
            .then(response => this.setState({
                data: response.data
            }))
    };

    render() {
        let Name = this.state.data ?  'lol' : 'nelol';
        return (
            <div>
                <Card style={{maxWidth: "500px", position: "relative", left: "35%"}}>
                    <CardHeader
                        title="Property cross"
                        action={
                            <Button>Faves</Button>
                        }
                    />
                    <CardContent>
                        <Typography component="p">
                            Use the form below to search for houses to buy. You can search by place-name,
                            postcode, or click 'My location', to search in your current location
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Input />
                    </CardActions>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.onGoClick}>
                            Go
                        </Button>
                        <Button size="small" color="primary">
                            My Location
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Typography component="p">
                            Recent searches:
                        </Typography>
                        <Typography component="div" style={{borderColor: "black"}}>
                            {Name}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}