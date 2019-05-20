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

const textBoxStyle = {
    flex: '20%',
    height: '10vh',
    backgroundColor:'grey',
    paddingLeft: '10px',
}

// This is in charge of all things to do with the chat window -- message boxes (both user and non-user messages) and text input.

// How do we keep track and render all the messages?

class ChatWindowComponent extends React.Component {

    // Rendering messages and user input text field.
    // Add a nested fragment and another div style for the inner components of the chat window.
    // Layout alignment for inner components -- messages = flex: 70%, textinput = flex: 30%.

	render() {
		return( 
            <React.Fragment>
                <div style = {chatWindowStyle}>
                    <React.Fragment>
                        <div style = {messageWindowStyle}>
                            <MessageBoxComponent/>
                            <MessageBoxComponent/>
                            <MessageBoxComponent/>
                        </div>
                        <div style = {textBoxStyle}>
                            <p>world</p>
                        </div>
                    </React.Fragment>
                </div>
            </React.Fragment>
		)

	}
}

export default ChatWindowComponent;
