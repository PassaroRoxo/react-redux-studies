
export function changeMinNumber(newNumber) {
    return {
        type: 'NUMBER_MIN_CHANGED',
        payload: newNumber
    }
}

export function changeMaxNumber(newNumber) {
    return {
        type: 'NUMBER_MAX_CHANGED',
        payload: newNumber
    }
}