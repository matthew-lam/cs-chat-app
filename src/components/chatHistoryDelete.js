import React from 'react';

// TODO: need to fix CSS alignment / layout of delete button when I can find the time.

const deleteButtonStyle = {
    backgroundColor: 'red',
    color: 'white'
}

class ChatHistoryDelete extends React.Component {

    render() {
        return (
            <button style = {deleteButtonStyle} id = {this.props.id} onClick = {() => this.props.deleteChat(this.props.id)}>
                <p>X</p>
            </button>
        )
    }
}

export default ChatHistoryDelete;
