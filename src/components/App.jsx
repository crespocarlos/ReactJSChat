
import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import ChatStore from '../stores/ChatStore';
import connectToStores from 'alt-utils/lib/connectToStores';

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

@connectToStores
class App extends React.Component {
    constructor() {
        super();
    }
    
    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
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
        var view = <Login />;
        
        if(this.props.user){
            view = (
                <div>
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
        
        return (
            <div>
                <AppBar title="Chat App" />
                {view}
            </div>
        );
    }
}

export default App;
