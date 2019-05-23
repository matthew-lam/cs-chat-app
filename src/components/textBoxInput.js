import React from 'react';

class TextBoxInput extends React.Component {

    handleOnClick(inputText) {
        this.props.addMessage(inputText);
        this.props.echoMessage(inputText);
    }

	render() {
		return(    
            <React.Fragment>
                <form id = "input_form">
                    <input type = {"text"} id = {"input_id"} defaultValue = {""}/>
                    <input type = {"button"} value = {"Submit"} id = {"submit_button"} onClick = {() => this.handleOnClick(document.getElementById("input_id").value)}/>
                </form>
            </React.Fragment>
		)
    }
    
}

export default TextBoxInput;
