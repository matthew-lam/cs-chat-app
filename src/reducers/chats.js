const chats = (state = [], action) => {
    switch (action.type) {
        case 'SPAWN_CHAT':
            return[
                ...state,
                {
                    chatID: action.chatID,
                    chatMessages: action.chatMessages,
                }
            ]
        case 'DELETE_CHAT':
            state.pop()
            return[
                ...state
            ]
        case 'SELECT_CHAT':
            // Need to revisit this.
            return state
        default:
            return state
    }
}

export default chats