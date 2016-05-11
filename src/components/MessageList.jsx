import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'hi there, how are you?',
                'i am fine, and you?'
            ]
        };
    }

    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (
                <div key={message}>
                    <Message message={message} />
                </div>
            );
        });

        return (
            <Card style={{ flexGrow: 2, marginLeft: 30 }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;