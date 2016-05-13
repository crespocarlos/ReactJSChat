import React from 'react';
import {ListItem} from 'material-ui/List';
import Actions from '../actions';
import {Link} from 'react-router';

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        Actions.channelOpened(this.props.channel);
    }

    render() {
        let style = {};

        if (this.props.channel.selected) {
            style.backgroundColor = '#f0f0f0';
        }

        return (
            <ListItem
                containerElement={<Link to={'/chat/' + this.props.channel.key} /> }
                style={style}
                key={this.props.channel.key}>
                    {this.props.channel.name}
            </ListItem>
        );
    }
}

export default Channel;