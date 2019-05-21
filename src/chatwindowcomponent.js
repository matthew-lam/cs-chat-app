import React from 'react';
import {connect} from 'react-redux';
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

const ChatWindowComponent = ({messages}) => (

    // We want messages to be rendered in between the message window style div tags
    
    // Where messages is an array of stored message objects. message objects contain (timestamp, message, isUserMessage).
        // MessageBoxComponent already is already a message object.
        // So... only need to make an array of message objects here, which will be 'messages'.
        // But where is the messages parameter going to come from.

        // Messages contain state --> how many messages there are (count of messages -> state differences).
    
        // Need to unpack and render all the message objects inside the messages array. Use a for loop to repteadly create MessageBoxComponents.

    <React.Fragment>
        <div style = {chatWindowStyle}>
            <React.Fragment>
            <div style = {messageWindowStyle}>

            
            </div>
            </React.Fragment>
        </div>
    </React.Fragment>
)


/* class ChatWindowComponent extends React.Component {

    // Rendering messages and user input text field.
    // Add a nested fragment and another div style for the inner components of the chat window.
    // Layout alignment for inner components -- messages = flex: 70%, textinput = flex: 30%.

    // Should this be stateless?

	render() {
		return( 
            <React.Fragment>
                <div style = {chatWindowStyle}>
                    <React.Fragment>
                        <div style = {messageWindowStyle}>
                            <MessageBoxComponent isUserMessage = 'false' isEchoMessage = 'false' message = 'test'/>
                            <MessageBoxComponent isUserMessage = 'true' isEchoMessage = 'false' message = 'hello'/>
                            <MessageBoxComponent isUserMessage = 'false' isEchoMessage = 'true' message = 'test'/>
                        </div>
                        <div style = {textBoxStyle}>
                            <textarea style = {textBoxStyle}></textarea>
                        </div>
                    </React.Fragment>
                </div>
            </React.Fragment>
		)

	}
} */

export default ChatWindowComponent;
