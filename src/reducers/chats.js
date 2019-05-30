const initialState = {
    chats: [],
    messages: [],
    nextChatId: 0,
    nextMessageId: 0,
    selectedChatId: 0
}

const chats = (state = initialState, action) => {
    console.log('STATE', state);
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
                nextChatId: state.nextChatId + 1
            }

        case 'INIT_MESSAGE':
            console.log(action.selectedChatId)
            return {
                ...state,
                chats: state.chats.map(
                    chat => chat.chatID === action.selectedChatId ? 
                        {...chat, messageIds: [...chat.messageIds, state.nextMessageId]} : chat
                ),
                messages: [
                    ...state.messages,
                    {
                        message_id: state.nextMessageId,
                        isUserMessage: 'false',
                        text: 'Welcome to the chat.'
                    }
                ],
                nextMessageId: state.nextMessageId + 1
            }
        case 'ADD_MESSAGE':
            return state
            // var state_addMessage = [...state];
            // state_addMessage[action.chatID].push(
            //     {
            //         message_id: 0,
            //         isUserMessage: 'false',
            //         text: action.text
            //     }
            // );
            // return [
            //     ...state_addMessage
            // ]
        case 'ECHO_MESSAGE':
            return state
            // var state_echoMessage = [...state];
            // state_echoMessage[action.chatID].push(
            //     {
            //         message_id: 0,
            //         isUserMessage: 'false',
            //         text: action.text
            //     }
            // );
            // return [
            //     ...state_echoMessage
            // ]
        case 'DELETE_CHAT':
            // Not too sure if this will update the state, but it SHOULD.
            var clonedState_DC = state;
            clonedState_DC.pop()
            return [
                ...state
            ]
        case 'SELECT_CHAT':
            // Need to revisit this.
            // Need to figure out how to update the state without mutating the store. This is so that react components will update.
            console.log('selected chat: ' + action.selectedChat)
            return state
        default:
            // This won't actually update the component.
            return state
    }
}

export default chats;
