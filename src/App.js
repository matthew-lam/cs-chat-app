import React from 'react';
import './App.css';
import HeaderBar from './components/headerbar';
import BodyComponent from './components/bodyComponent';

const divStyle = {
    display: 'flex',
    height: '100%',
    flexFlow: 'column',
}

class App extends React.Component {

	render() {
		// Rendering components into the page
		// TODO: - Render all components into the page into the correct place as seen in the wireframe example.
		//	- 4 components: top header bar, add chat button, right panel for currently selected chat.

		return(
			<React.Fragment>
                <div style = {divStyle}>
                    <HeaderBar/>
                    <BodyComponent/>  
                </div>
			</React.Fragment>
		)

	}
	
}

export default App;
