// Where state pertains to the messages and message objects inside in a singular chat.

// TODO: Need to re-write the code based on each chat having a messages 'state' inside of it (basically just an array of messages anyway)

const chats = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case 'SPAWN_CHAT':
            // This should be in charge of creating the chat history window box on the left.
            return state
        case 'INIT_MESSAGE':
            state.push([{ message_id: 0, isUserMessage: 'false', text: 'Welcome to the chat' }])
            return state
        case 'ADD_MESSAGE':
            // return[
            //     ...state,
            //     {
            //         chat_id: action.chatID,
            //         message_id: action.id,
            //         isUserMessage: action.isUserMessage,
            //         text: action.text
            //     }
            // ]
            state[action.chatID].push(
                {
                    message_id: action.id,
                    isUserMessage: action.isUserMessage,
                    text: action.text
                }
            )
            return(
                state
            )

        case 'ECHO_MESSAGE':
            // return[
            //     ...state,
            //     {
            //         chat_id: action.chatID,
            //         message_id: action.id,
            //         isUserMessage: action.isUserMessage,
            //         text: action.text
            //     }
            // ]
            state[action.chatID].push(
                {
                    message_id: action.id,
                    isUserMessage: action.isUserMessage,
                    text: action.text
                }
            )
            return(
                state
            )

        case 'DELETE_CHAT':
            state.pop()
            return [
                ...state
            ]

        case 'SELECT_CHAT':
            // Need to revisit this.
            return state

        default:
            return state
    }
}

export default chats;
