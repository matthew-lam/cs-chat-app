var messageId = 0
var echoMessageId = 0

export const addMessage = text => ({
    type: 'ADD_MESSAGE',
    id: messageId++,
    text
})

export const echoedMessage = text =>({
    type: 'ECHO_MESSAGE',
    id: echoMessageId++,
    text
})