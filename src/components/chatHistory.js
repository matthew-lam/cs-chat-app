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

        // try{
        //     let lastElement = this.props.chats.length-1 // Can't get last element by referencing index [-1] in js???
        //     var chatID = (this.props.chats[lastElement][0]);
        // }
        // catch(err){
        //     // Do nothing.
        // }

		return(
            // TODO: Add chat history boxes here.
            // Render them based on how many chats have been created.
            // Give each ChatHistoryBox an ID so they can be tied/'mapped' to each chat via their chat ID's (but not ACTUALLY mapped, just a soft-reference).
            // e.g. chatBoxID = 1 === chatID = 1.
            <React.Fragment>
                <div style = {chatHistoryStyle}>
                    {this.props.chats.map((message, i) => <ChatHistoryBox id = {message[0]} text = {message[0]} key = {i}/>)}
                </div>
            </React.Fragment>
		)
	}
}


// this.props.chats.map((message, i) => <MessageBoxComponent isUserMessage = {message.isUserMessage} isEchoMessage = 'false' message ={message.text} key={i}/>)


export default ChatHistory
