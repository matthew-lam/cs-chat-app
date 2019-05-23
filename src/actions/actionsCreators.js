var messageId = 1 // Start at 1, since we assume Add chat button has been pressed which already starts from index 0.

export const addMessage = text => ({
    type: 'ADD_MESSAGE',
    id: messageId++,
    isUserMessage: 'true',
    text
})

export const echoMessage = text => ({
    type: 'ECHO_MESSAGE',
    id: messageId++,
    isUserMessage: 'false',
    text
})

export const initMessage = text => ({
    type: 'INIT_MESSAGE',
    id: 0,
    isUserMessage: 'false',
    text
})