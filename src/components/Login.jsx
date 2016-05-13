import React from 'react';
import mui from 'material-ui';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Actions from '../actions';


class Login extends React.Component {

    onClick() {
        Actions.login(this.context.router);
    }

    static contextTypes = {
        router: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                Por favor, logue com sua conta google.
              </CardText>

              <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this) }
                label="Log in with Google" primary={true} />
            </Card>

        );
    }
}


module.exports = Login;
