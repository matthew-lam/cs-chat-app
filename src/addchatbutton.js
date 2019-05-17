import React from 'react';
// TODO: Need to import logic for adding chat history and adding new chat window to put in callback.


class AddChatButton extends React.Component {
    // AddChatButton rendered inside of HeaderBar component as a child.
    // AddChatButton creates a new chat -- it should spawn new components.
    //  Newly spawned components --> New chat instances (left pane) & new chat window (right pane).

    // Callback methods to allow button to provide front-end functionality.
    acbClicked = () => {
            // Creates chat history
            // Wrapper function to create new chat history button thing.

            // Creates chat window
            // Wrapper function to spawn new chat window/

            this.props.callbackFromParent();
    }


    render() {
        // TODO: complete rendering function.
        
        return (
            
            <button onClick = {this.acbClicked} style = {{fontSize: 'medium', borderRadius: '5px', padding: "5px 5px"}}>
                Add chat
            </button>

        )

    }

}

export default AddChatButton;