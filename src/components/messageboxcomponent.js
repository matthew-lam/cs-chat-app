import React from 'react';

// Color of message box should be reliant on whether it's a user sent message or not. User props and render the color in the render function.

class MessageBoxComponent extends React.Component {

    date = new Date();
    timestampString = this.date.toString();
    messageString = '';

    componentDidMount(){
        if(this.props.isEchoMessage === 'true'){
            this.messageString = 'You said: ' + this.props.message;
        }
        else{
            this.messageString = this.props.message;
        }

        this.forceUpdate();
    }

	render() {
        // Hacky CSS because I'm not sure how to do it better. :(

        var messageBoxStyle = {
            borderStyle : 'solid',
            borderColor: 'black',
            borderWidth: '2px',
            padding: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '10px',
            marginLeft: '0%',
            fontSize: 'small',
        }

        if(this.props.isUserMessage === 'true'){
            messageBoxStyle = Object.assign({}, messageBoxStyle, {marginLeft: '60%'})
        }
        else{
            messageBoxStyle = Object.assign({}, messageBoxStyle, {display: 'table'})
        }

		return(
            <div style = {messageBoxStyle}>
                Sent on {this.timestampString}
                <p>{this.messageString}</p>
            </div>
		)
	}
}

export default MessageBoxComponent;

// Example of rendering a message box component:

    // Create a react component passing the correct arguments as props:
    // <MessageBoxComponent isUserMessage = 'true' isEchoMessage = 'false' message = 'test'>
