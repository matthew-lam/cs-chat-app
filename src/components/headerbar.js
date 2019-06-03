import React from 'react';
import AddChatButton from '../containers/addChatButton';

// TODO: Figure out alignment for 'Add chat' button. (Just need to do a little bit of padding/margins)

const divStyle = {
    // Just some simple CSS styling for alignment and design of components.
    backgroundColor: 'green',
    color: 'white',
    alignSelf: 'start',
    height: '20%',
    width: '100%',
}

const textPaddingStyle = {
    paddingTop: '2%', // ??? CSS confuses me.
    textAlign: 'center'
}

const buttonStyling = {
    // Dunno why this alignment will work, but it's not too important and I'll figure it out later.
}

class HeaderBar extends React.Component {
    // HeaderBar located at the top of the page.
    // AddChatButton needs to be inside of here as a child to be rendered.

    render() {
        // TODO: complete rendering function.
        return (

            <div style={divStyle}>
                <h1 style={textPaddingStyle}> An awesome chat app </h1>
                <AddChatButton style={buttonStyling} />
            </div>

        )
    }

}

export default HeaderBar;