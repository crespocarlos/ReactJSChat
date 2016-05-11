import React from 'react';
import Channel from './Channel.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                'dogs',
                'cats'
            ]
        };
    }

    render() {
        var channelNodes = this.state.channels.map((channel) => {
            return (
                <div key={channel}>
                    <Channel channel={channel} />
                </div>
            );
        });

        return (
            <Card style={{ flexGrow: 1 }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;