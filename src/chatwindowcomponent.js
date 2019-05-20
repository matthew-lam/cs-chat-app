import React from 'react';

const chatWindowStyle = {
    // Styling for the chat history component.
    flex: '75%',
    backgroundColor: '#dcdfe5',
}


class ChatWindowComponent extends React.Component {

	render() {
		return(
            //       
            <React.Fragment>
                <div style = {chatWindowStyle}>
                    <p>test2</p>
                </div>
            </React.Fragment>
		)

	}

}

export default ChatWindowComponent;
