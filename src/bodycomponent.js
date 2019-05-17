import React from 'react';
// TODO: Need to import both the chatHistory and chatWindow component to render in Fragments.

const chatComponentStyle = {
    // Aligning the components in BodyComponent using CSS.
    display: 'flex',
    flexWrap: 'wrap;',
}

const chatHistoryStyle = {
    // Styling for the chat history component.
    flex: '30%',
}

const chatWindowStyle = {
    flex: '70%',
    padding: '10px',
}

class BodyComponent extends React.Component {

    // Body component is the intermediary component that contains the chat history (left pane)
    //  and the chat window (right pane)

	render() {
		return(
            <React.Fragment>

            </React.Fragment>
		)

	}

}

export default BodyComponent;
