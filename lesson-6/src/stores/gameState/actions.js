

export const INCREMENT_ACTIVE_QUESTION = 'INCREMENT_ACTIVE_QUESTION'; 
export const INCREMENT_ACTIVE_PLAYER = 'INCREMENT_ACTIVE_PLAYER'; 
export const START_GAME = 'START_GAME'; 
export const END_GAME = 'END_GAME'; 
export const SHOW_ANSWER = 'SHOW_ANSWER'; 
export const HIDE_ANSWER = 'HIDE_ANSWER'; 


export const createIncrementactiveQuestionIndex = () => ({
    type: INCREMENT_ACTIVE_QUESTION
})

export const createIncrementactivePlayerIndex  = () => ({
    type: INCREMENT_ACTIVE_PLAYER
})

export const createStartGame  = (gameState) => ({
    type: START_GAME,
    payload: gameState,
})

export const createEndGame  = () => ({
    type: END_GAME,
})

export const createShowAnswer  = () => ({
    type: SHOW_ANSWER,
})

export const createHideAnswer  = () => ({
    type: HIDE_ANSWER,
})