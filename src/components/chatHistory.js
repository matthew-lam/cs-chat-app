import React from 'react';
import ChatHistoryBox from './chatHistoryBox';

const chatHistoryStyle = {
    // Styling for the chat history component.
    display: 'flex',
    overflowX: 'hidden',
    overflowY: 'scroll',
    flex: '25%',
    backgroundColor: 'lightGrey',
}

class ChatHistoryComponent extends React.Component {

	render() {
		return(
            // TODO: Add chat history boxes here.
            // Render them based on how many chats have been created.
            <React.Fragment>
                <div style = {chatHistoryStyle}>
                    <ChatHistoryBox/>
                </div>
            </React.Fragment>
		)

	}

}

export default ChatHistoryComponent;
