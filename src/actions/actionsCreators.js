var messageId = 1; // Start at 1, since we assume Add chat button has been pressed which already starts from index 0.
var chatId = 0;

export const addMessage = (text, selectedChatId) => ({
    type: 'ADD_MESSAGE',
    chatID: selectedChatId, // Don't really like how 'hacky' I've made the solution to this problem, but it works.
    // Due to the way of keeping track of chatId variable works with spawning new chats, this must be done to ensure that message actions correspond properly.
    isUserMessage: 'true',
    text
})

export const echoMessage = text => ({
    type: 'ECHO_MESSAGE',
    chatID: chatId-1,
    id: messageId++,
    isUserMessage: 'false',
    text
})

export const initMessage = (text, selectedChatId) => ({
    type: 'INIT_MESSAGE',
    selectedChatId: selectedChatId,
    isUserMessage: 'false',
    text
})

export const spawnChat = () => ({
        type: 'SPAWN_CHAT',
    }   
)

export function addChatSession(text, selectedChatId) {
    console.log(text, selectedChatId)
    return dispatch => {
        dispatch(spawnChat());
        dispatch(initMessage(text, selectedChatId));
    }
}

export const deleteChat = () => ({
    type: 'DELETE_CHAT',
    chatID: chatId--,
    // Figure out way to remove a chat (to 'revert' back to a preceding state) from the current state.
    // That would have to be done in the reducer. Just push the last element in the state to delete chat.
})

export const selectChat = id => ({
    type: 'SELECT_CHAT',
    selectedChat: id
    // selectedChat and chatID should be different since chatID determines how many chat sessions there are active.
})