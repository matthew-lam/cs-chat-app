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
    overflowX: 'hidden',
}

const buttonStyle = {
    width: '85%',
    height: '100%',
}


class ChatHistoryBox extends React.Component {
    // this.props.id is from the props supplied by a parent react component that calls it. (chatHistory.js)
	render() {
		return(  
            <React.Fragment>
                <div style = {chatHistoryBoxStyle} id = {this.props.id} onClick = {() => this.props.selectChat(this.props.id)}>
                    <button style = {buttonStyle}>
                        <p>{this.props.text}</p>
                    </button>
                    <ChatHistoryDelete/>
                </div>
            </React.Fragment>
		)
	}
}

export default ChatHistoryBox;
