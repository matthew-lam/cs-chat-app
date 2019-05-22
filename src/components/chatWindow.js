import React from 'react';
import MessageBoxComponent from './messageboxcomponent.js';

const chatWindowStyle = {
    // Styling for the chat history component.
    flex: '75%',
    backgroundColor: '#dcdfe5',
}

const messageWindowStyle = {
    // Height is '70vh' here because headerBar component is 20, textBox is 10, and so messageWindow should fill the remaining 'percentage' of viewport height/
    flex: '80%',
    height: '70vh',
    backgroundColor: 'white',
    padding: '5px',
    paddingLeft: '15px',
}

/* const textBoxStyle = {
    padding: '5px',
    paddingRight: '15px',
    display: 'flex',
    flex: '1',
} */

class ChatWindow extends React.Component {

	render() {
		return( 
            
            <React.Fragment>
                <div style = {chatWindowStyle}>
                    <React.Fragment>
                        <div style = {messageWindowStyle}>
                            {
                                this.props.messages.map((message, i) => <MessageBoxComponent isUserMessage = {message.isUserMessage} isEchoMessage = 'false' message ={message.text} key={i}/>)
                            }
                        </div>
                    </React.Fragment>
                </div>
            </React.Fragment>
		)

	}
}

export default ChatWindow;
