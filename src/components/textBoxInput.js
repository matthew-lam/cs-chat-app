import React from 'react';

class TextBoxInput extends React.Component {

    getTimeStamp_textbox() {
        var date = new Date();
        var timeStamp = date.toString();
        return timeStamp;
    }

    handleOnClick(inputText) {
        this.props.addMessage(inputText, this.props.selectedChatId, this.getTimeStamp_textbox());
        this.props.echoMessage('You said: ' + inputText, this.getTimeStamp_textbox());
        document.getElementById("input_form").reset();
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            let inputText = document.getElementById("input_id").value;
            // this.props.getState(); // This doesn't work.
            this.handleOnClick(inputText) // This also doesn't work.
            console.log(inputText); // This works.
        }
    }    
    

	render() {
		return( 
            <React.Fragment>
                <form id = "input_form" onSubmit = {(event) => event.preventDefault()}>
                    
                    <input type = {"text"} id = {"input_id"} defaultValue = {""} 
                    onKeyPress = {(event) => this.handleKeyPress(event)}
                    disabled = {this.props.chats.length === 0 ? true: false}
                    />

                    <input type = {"button"} value = {"Submit"} id = {"submit_button"} 
                    onClick = {() => this.handleOnClick(document.getElementById("input_id").value)} 
                    disabled = {this.props.chats.chats.length === 0 ? true: false} 
                />

                </form>
            </React.Fragment>
		)
    }
}

export default TextBoxInput;
