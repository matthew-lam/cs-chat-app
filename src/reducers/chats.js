const chats = (state = [], action) => {
  switch (action.type) {
    case "SPAWN_CHAT":
      return [...state, [action.chatID]];
    case "INIT_MESSAGE":
      console.log(action.chatID);
      var state_initMessage = [...state];
      console.log(state_initMessage);
      state_initMessage[action.chatID].push({
        message_id: 0,
        isUserMessage: "false",
        text: "Welcome to the chat."
      });
      return [...state_initMessage];
    case "ADD_MESSAGE":
      var state_addMessage = [...state];
      state_addMessage[action.chatID].push({
        message_id: 0,
        isUserMessage: "false",
        text: action.text
      });
      return [...state_addMessage];
    case "ECHO_MESSAGE":
      var state_echoMessage = [...state];
      state_echoMessage[action.chatID].push({
        message_id: 0,
        isUserMessage: "false",
        text: action.text
      });
      return [...state_echoMessage];
    case "DELETE_CHAT":
      // Not too sure if this will update the state, but it SHOULD.
      var clonedState_DC = state;
      clonedState_DC.pop();
      return [...state];
    case "SELECT_CHAT":
      // Need to revisit this.
      // Need to figure out how to update the state without mutating the store. This is so that react components will update.
      console.log("selected chat: " + action.selectedChat);
      return state;
    default:
      // This won't actually update the component.
      return state;
  }
};

export default chats;
