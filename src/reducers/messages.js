// Where state pertains to the messages and message objects inside in a singular chat.

// How do we reference the state passed into the messageReducer outside of this file?

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