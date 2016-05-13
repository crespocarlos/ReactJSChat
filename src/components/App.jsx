
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, blue700, blue100, pink400} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import RouteHandler from 'react-router';


const muiTheme = new getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100,
        accent1Color: pink400
    }
});

class App extends React.Component {
    constructor() {
        super();
    }
    
    
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    render() {
        return (
            <div>
                <AppBar title="Chat App" />
                {this.props.children}
            </div>
        );
    }
}

export default App;
