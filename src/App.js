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

		return (
			<React.Fragment>
				<div style={divStyle}>
					<HeaderBar />
					<BodyComponent />
				</div>
			</React.Fragment>
		)

	}

}

export default App;
