import React from 'react';
import Channel from './Channel.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';


@connectToStores
class ChannelList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.selectedChannel = this.props.channel;
        ChatStore.getChannels(this.selectedChannel);
    }

    componentWillReceiveProps(nextProps) {
        if (this.selectedChannel != nextProps.channel) {
            this.selectedChannel = nextProps.channel;
            ChatStore.getChannels(this.selectedChannel);
        }
    }

    static getStores() {
        return [ChatStore];
    }

    static getPropsFromStores() {
        return ChatStore.getState();
    }

    render() {
        if (!this.props.channels) {
            return (
                <Card style= {{
                    flexGrow: 1
                }}>
                    <CircularProgress
                        mode="indeterminate"
                        style={{
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            margin: '0 auto',
                            display: 'block',
                            width: '60px'
                        }}
                        />
                </Card>
            )
        }

        var channelNodes = _(this.props.channels)
            .keys()
            .map((k) => {
                let channel = this.props.channels[k];
                return (
                    <Channel key={k} channel={channel} />

                );
            })
            .value();

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