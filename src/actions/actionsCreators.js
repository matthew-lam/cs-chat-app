var messageId = 1; // Start at 1, since we assume Add chat button has been pressed which already starts from index 0.
var chatId = 0;

export const addMessage = text => ({
    type: 'ADD_MESSAGE',
    id: messageId++,
    isUserMessage: 'true',
    text
})

export const echoMessage = text => ({
    type: 'ECHO_MESSAGE',
    id: messageId++,
    isUserMessage: 'false',
    text
})

export const initMessage = text => ({
    type: 'INIT_MESSAGE',
    id: 0,
    isUserMessage: 'false',
    text
})

export const spawnChat = () => ({
    type: 'SPAWN_CHAT',
    chatID: chatId++,
    chatMessages: []
})

export const deleteChat = () => ({
    type: 'DELETE_CHAT',
    chatID: chatId--,
    // Figure out way to remove a chat (to 'revert' back to a preceding state) from the current state.
    // That would have to be done in the reducer. Just push the last element in the state to delete chat.
})

export const selectChat = () => ({
    type: 'SELECT_CHAT'
})