var messageId = 0
var echoMessageId = 0

export const addMessage = text => ({
    type: 'ADD_MESSAGE',
    id: messageId++,
    isUserMessage: 'true',
    text
})

export const initMessage = text => ({
    type: 'INIT_MESSAGE',
    id: messageId++,
    isUserMessage: 'false',
    text
})