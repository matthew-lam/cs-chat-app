import React from 'react';

const messageBoxStyle = {
    borderStyle : 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    padding: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginBottom: '5px',
    display: 'table',
}

// Color of message box should be reliant on whether it's a user sent message or not. User props and render the color in the render function.

class MessageBoxComponent extends React.Component {

    timeStamp = '';

    componentDidMount(){
        //this.timeStamp = Date.;
    }

	render() {
		return(
            <div style = {messageBoxStyle}>
                <p>Sent on ...</p>
            </div>
		)
	}
}

export default MessageBoxComponent;
