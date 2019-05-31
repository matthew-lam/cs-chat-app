import React from 'react';
import MessageBoxComponent from './messageBox';
import TextBoxInput from '../containers/textBoxInput';

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
    overflowY: 'scroll',   
}

const textBoxStyle = {
    padding: '5px',
    display: 'flex',
    flex: '1',
}

class ChatWindow extends React.Component {

    componentWillUpdate(){
        console.log('updated'); // This doesn't update when select chat is called for some reason.
    }

	render() {        
        return( 
            <React.Fragment>
                <div style = {chatWindowStyle}>
                    <React.Fragment>
                        <div style = {messageWindowStyle}>
                            {
                                this.props.chats.chats.length > 0 ? 
                                (this.props.chats.chats[this.props.selectedChatId].messageIds.map((message, i) => <MessageBoxComponent isUserMessage = {this.props.chats.messages[message].isUserMessage} message = {this.props.chats.messages[message].text} timeStamp = {this.props.chats.messages[message].timeStamp} key = {i}/>))
                                : null
                            }
                        </div>
                        <div style = {textBoxStyle}>
                            <TextBoxInput/>
                        </div>
                    </React.Fragment>
                </div>
            </React.Fragment>
		)
	}
}

export default ChatWindow;