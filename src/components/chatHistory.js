import React from 'react';
import ChatHistoryBox from '../containers/chatHistoryBox';

const chatHistoryStyle = {
    // Styling for the chat history component.
    display: 'inline',
    overflowX: 'hidden',
    overflowY: 'scroll',
    flex: '25%',
    backgroundColor: 'lightGrey',
}

class ChatHistory extends React.Component {

	render() {
		return(
            <React.Fragment>
                <div style = {chatHistoryStyle}>
                    {this.props.chats.chats.map((message, i) => <ChatHistoryBox id = {message.chatID} text = {this.props.chats.messages[message.messageIds[message.messageIds.length-1]].text} key = {i}/>)}
                </div>
            </React.Fragment>
		)
	}
}

export default ChatHistory
