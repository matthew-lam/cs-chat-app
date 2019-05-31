
export const addMessage = (text, selectedChatId, timeStamp) => ({
    type: 'ADD_MESSAGE',
    selectedChatId: selectedChatId,
    isUserMessage: 'true',
    text,
    timeStamp: timeStamp
})

export const echoMessage = (text, timeStamp) => ({
    type: 'ECHO_MESSAGE',
    isUserMessage: 'false',
    text,
    timeStamp: timeStamp
})

export const initMessage = (selectedChatId, timeStamp) => ({
    type: 'INIT_MESSAGE',
    selectedChatId: selectedChatId,
    isUserMessage: 'false',
    timeStamp: timeStamp
})

export const spawnChat = () => ({
        type: 'SPAWN_CHAT',
    }   
)

export function addChatSession(selectedChatId, timeStamp) {
    return dispatch => {
        dispatch(spawnChat());
        dispatch(initMessage(selectedChatId, timeStamp));
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