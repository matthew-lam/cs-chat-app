import React from 'react';
import HeaderBar from './headerbar.js';
// Need to import body component and add it into Fragments in render.

// Top level component window contains the header bar and the body component. Not ACTUALLY the top level component, but we just say it is for simplicity.

class TopLevelComponent extends React.Component {

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
