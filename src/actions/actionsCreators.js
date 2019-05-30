
export const addMessage = (text, selectedChatId) => ({
    type: 'ADD_MESSAGE',
    selectedChatId: selectedChatId,
    isUserMessage: 'true',
    text
})

export const echoMessage = text => ({
    type: 'ECHO_MESSAGE',
    isUserMessage: 'false',
    text
})

export const initMessage = (selectedChatId) => ({
    type: 'INIT_MESSAGE',
    selectedChatId: selectedChatId,
    isUserMessage: 'false',
})

export const spawnChat = () => ({
        type: 'SPAWN_CHAT',
    }   
)

export function addChatSession(selectedChatId) {
    return dispatch => {
        dispatch(spawnChat());
        dispatch(initMessage(selectedChatId));
    }
}

export const deleteChat = id => ({
    type: 'DELETE_CHAT',
    selectedChatId: id
    // Figure out way to remove a chat (to 'revert' back to a preceding state) from the current state.
    // That would have to be done in the reducer. Just push the last element in the state to delete chat.
})

export const selectChat = id => ({
    type: 'SELECT_CHAT',
    selectedChat: id
    // selectedChat and chatID should be different since chatID determines how many chat sessions there are active.
})