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
                leftAvatar={<Avatar src="https://lh6.googleusercontent.com/-BKsovYg2Yss/AAAAAAAAAAI/AAAAAAAAAAA/ADhl2yrnB3OygFbEegjPp28DocIA4Py7WQ/mo/photo.jpg?sz=46" />}>
                {this.props.message}
            </ListItem>
        );
    }
}

export default Message;