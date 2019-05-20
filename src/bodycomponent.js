import React from 'react';
import ChatHistoryComponent from './chathistorycomponent'
import ChatWindowComponent from './chatwindowcomponent'
// TODO: Need to import both the chatHistory and chatWindow component to render in Fragments.

const chatComponentStyle = {
    // Aligning the components in BodyComponent using CSS.
    display: 'flex',
    flexWrap: 'wrap',
    height: '80vh', // Height scaling doesn't work with percentage here for some reason, so using viewport height length instead.
}

class BodyComponent extends React.Component {

    // Body component is the intermediary component that contains the chat history (left pane)
    //  and the chat window (right pane)

	render() {
		return(
            <React.Fragment>
                <div style = {chatComponentStyle}>
                <ChatHistoryComponent/>
                <ChatWindowComponent/>
                </div>
            </React.Fragment>
		)

	}

}

export default BodyComponent;
