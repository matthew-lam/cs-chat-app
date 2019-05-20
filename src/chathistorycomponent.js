import React from 'react';

const chatHistoryStyle = {
    // Styling for the chat history component.
    flex: '25%',
    backgroundColor: 'lightGrey',
}


class ChatHistoryComponent extends React.Component {

	render() {
		return(
            // TODO: Add chat history boxes here...
            //       
            <React.Fragment>
                <div style = {chatHistoryStyle}>
                    <p>test</p>
                </div>
            </React.Fragment>
		)

	}

}

export default ChatHistoryComponent;
