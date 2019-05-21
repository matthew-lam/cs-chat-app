// Where state pertains to the messages and message objects inside in a singular chat.

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        case 'ECHO_MESSAGE':
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return state
    }
}

export default messageReducer