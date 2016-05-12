import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {}
        };
    }
    
    static getStores(){
        return [ChatStore];
    }
    
    static getPropsFromStores(){
        return ChatStore.getState();
    }
    
    render() {
        let messageNodes = null;
        
        if(!this.props.messagesLoading){
            messageNodes = _.values(this.props.messages).map((message) => {
                return (
                    <div key={message.date}>
                        <Message message={message} />
                    </div>
                );
            });
        }else{
           messageNodes = <CircularProgress
                                mode="indeterminate"
                                style={{
                                    paddingTop: '20px',
                                    paddingBottom: '20px',
                                    margin: '0 auto',
                                    display: 'block',
                                    width: '60px'
                                }}
                            />
        }

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