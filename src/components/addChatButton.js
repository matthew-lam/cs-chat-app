import React from 'react';

// TODO: Need to import logic for adding chat history and adding new chat window to put in callback.

class AddChatButton extends React.Component {
    // AddChatButton rendered inside of HeaderBar component as a child.
    // AddChatButton creates a new chat -- it should spawn new components.
    //  Newly spawned components --> New chat instances (left pane) & new chat window (right pane).

    // <button onClick = {this.props.initMessage} style = {{fontSize: 'medium', borderRadius: '5px', padding: "5px 5px"}}>

    addChatSessionOnClick = () => {
        this.props.addChatSession(this.props.selectedChatId)
    }

    render() {
        // TODO: complete rendering function.
        return (       
            <button onClick = {this.addChatSessionOnClick} style = {{fontSize: 'medium', borderRadius: '5px', padding: "5px 5px"}}>
                Add chat
            </button>
        )
    }

}

export default AddChatButton;