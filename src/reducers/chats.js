const initialState = {
    chats: [],
    messages: [],
    nextChatId: 0,
    nextMessageId: 0,
    selectedChatId: 0
}

const chats = (state = initialState, action) => {
    switch (action.type) {
        case 'SPAWN_CHAT':
            return {
                ...state,
                chats: [
                    ...state.chats, {
                        chatID: state.nextChatId,
                        messageIds: []
                    }
                ],
                nextChatId: state.nextChatId + 1,
                selectedChatId: state.chats.length
            }

        case 'INIT_MESSAGE':
            return {
                ...state,
                chats: state.chats.map(
                    chat => chat.chatID === state.selectedChatId ?
                        { ...chat, messageIds: [...chat.messageIds, state.nextMessageId] } : chat
                ),
                messages: [
                    ...state.messages,
                    {
                        message_id: state.nextMessageId,
                        isUserMessage: 'false',
                        text: 'Welcome to the chat.',
                        timeStamp: action.timeStamp
                    }
                ],
                nextMessageId: state.nextMessageId + 1
            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                chats: state.chats.map(
                    chat => chat.chatID === state.selectedChatId ?
                        { ...chat, messageIds: [...chat.messageIds, state.nextMessageId] } : chat
                ),
                messages: [
                    ...state.messages,
                    {
                        message_id: state.nextMessageId,
                        isUserMessage: 'true',
                        text: action.text,
                        timeStamp: action.timeStamp
                    }
                ],
                nextMessageId: state.nextMessageId + 1
            }
        case 'ECHO_MESSAGE':
            return {
                ...state,
                chats: state.chats.map(
                    chat => chat.chatID === state.selectedChatId ?
                        { ...chat, messageIds: [...chat.messageIds, state.nextMessageId] } : chat
                ),
                messages: [
                    ...state.messages,
                    {
                        message_id: state.nextMessageId,
                        isUserMessage: 'false',
                        text: action.text,
                        timeStamp: action.timeStamp
                    }
                ],
                nextMessageId: state.nextMessageId + 1
            }
        case 'DELETE_CHAT':
            // Need to revisit this.
            console.log('properly connected and stuff : ' + action.selectedChatId)
            return state
        case 'SELECT_CHAT':
            let mutatedState = {}
            Object.assign(mutatedState, state)
            mutatedState.selectedChatId = action.selectedChat
            console.log('Selected chat: ' + action.selectedChat)
            return mutatedState
        default:
            // This won't actually update the component.
            return state
    }
}

export default chats;
