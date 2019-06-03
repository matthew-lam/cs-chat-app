import React from 'react';

// Color of message box should be reliant on whether it's a user sent message or not. User props and render the color in the render function.

class MessageBoxComponent extends React.Component {

    render() {
        // Hacky CSS because I'm not sure how to do it better. :(

        var messageBoxStyle = {
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: '2px',
            padding: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '10px',
            marginLeft: '0%',
            fontSize: 'small',
        }

        if (this.props.isUserMessage === 'true') {
            messageBoxStyle = Object.assign({}, messageBoxStyle, { marginLeft: '60%' })
        }
        else {
            messageBoxStyle = Object.assign({}, messageBoxStyle, { display: 'table' })
        }

        return (
            <div style={messageBoxStyle}>
                Sent on {this.props.timeStamp}
                <p>{(this.props.isEchoMessage === 'true' ? ('You said: ' + this.props.message) : this.props.message)}</p>
            </div>
        )
    }
}

export default MessageBoxComponent; 