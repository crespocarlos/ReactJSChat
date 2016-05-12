import alt from '../alt';
import Firebase from 'firebase';

class Actions{
    constructor(){
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed',
            'channelOpened',
            'messagesLoading',
            'sendMessage',
            'messageSendSuccess',
            'messageSendError',
            'messageReceived',
            'messageDeleted'
        );
    }
    
    login(args){
        return (dispatch) => {
            var firebaseRef = new Firebase('https://ccrespo-react-chat.firebaseio.com/messages');
            firebaseRef.authWithOAuthPopup('google', (error, user) => {
               if(error){
                   return;
               }
               
               dispatch(user);
            });
        }
    }
}

export default alt.createActions(Actions);