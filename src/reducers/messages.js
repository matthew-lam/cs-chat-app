// Where state pertains to the messages and message objects inside in a singular chat.

// TODO: Need to re-write the code based on each chat having a messages 'state' inside of it (basically just an array of messages anyway)

const messages = (state = [], action) => {
    switch (action.type) {
        case 'INIT_MESSAGE':
            return[
                state[0] = { id: 0, isUserMessage: 'false', text: 'Welcome to the chat' }
            ]
        case 'ADD_MESSAGE':
            return[
                ...state,
                {
                    id: action.id,
                    isUserMessage: action.isUserMessage,
                    text: action.text
                }
            ]
        case 'ECHO_MESSAGE':
            return[
                ...state,
                {
                    id: action.id,
                    isUserMessage: action.isUserMessage,
                    text: action.text
                }
            ]
        default:
            return state
    }
}

export default messages