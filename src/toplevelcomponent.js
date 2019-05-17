import React from 'react';
import HeaderBar from './headerbar.js';

// Top level component window contains the header bar and the body component. Not ACTUALLY the top level component, but we just say it is for simplicity.

class TopLevelComponent extends React.Component {

    addChatButtonCallback = () => {
        // Haven't decided the logic for where adding new chat window and chat history goes yet...
        console.log("Callback test");
    }

	render() {
        //  <AddChatButton callbackFromParent = {this.addChatButtonCallback}/>
		return(
			<React.Fragment>
                <HeaderBar/>
			</React.Fragment>
		)

	}


}

export default TopLevelComponent;
