
import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, blue700, blue100, pink400} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

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
                <div style= {{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1200,
                    width: '100%',
                    margin: '30px auto 30px'
                }}>

                    <ChannelList />
                    <MessageList />

                </div>
                <MessageBox />
            </div>
        );
    }
}

export default App;
