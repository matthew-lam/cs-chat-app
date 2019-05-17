import React from 'react';
import './App.css';
import TopLevelComponent from './toplevelcomponent';

class App extends React.Component {
	// Setup of app should be done here.

	render() {
		// Rendering components into the page
		// TODO: - Render all components into the page into the correct place as seen in the wireframe example.
		//	- 4 components: top header bar, add chat button, right panel for currently selected chat.

		return(
			<TopLevelComponent/>
		)

	}


}

export default App;
