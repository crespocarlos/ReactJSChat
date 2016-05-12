import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar src={this.props.message.profilePic} />}>
                {this.props.message.message}
            </ListItem>
        );
    }
}

export default Message;