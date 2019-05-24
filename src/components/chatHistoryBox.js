import React from 'react';
import ChatHistoryDelete from './chatHistoryDelete';

const chatHistoryBoxStyle = {
    // Styling for the chat history component.
    width: '100%',
    height: '10%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRightStyle: 'none',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderWidth: '1px',
    backgroundColor: 'white',
    overflow: 'inherit',
}

const textStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    overflowX: 'hidden',
}

const buttonStyle = {
    width: '85%',
    height: '100%',
}


class ChatHistoryBox extends React.Component {

    // Put props (of message that needs to be displayed) in place of the <p> tag.

	render() {
		return(  
            <React.Fragment>
                <div style = {chatHistoryBoxStyle}>
                    <button style = {buttonStyle}>
                        <div style = {textStyle}>
                            <p>Testing</p>
                        </div>
                    </button>
                    <ChatHistoryDelete/>
                </div>
            </React.Fragment>
		)
	}
}

export default ChatHistoryBox;
