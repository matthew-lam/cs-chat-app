import React from "react";

// TODO: need to fix CSS alignment / layout of delete button when I can find the time.

const deleteButtonStyle = {
  backgroundColor: "red",
  color: "white"
};

class ChatHistoryDelete extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button style={deleteButtonStyle}>X</button>
      </React.Fragment>
    );
  }
}

export default ChatHistoryDelete;
