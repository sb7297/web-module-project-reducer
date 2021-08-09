export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEMORY_ADD = "MEMORY_ADD";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (op) => {
    if (op === "+" || op === "*" || op === "-") {
        return {type: CHANGE_OPERATION, payload: op};
    } else {
        return {};
    }
}

export const clearDisplay = () => {
    return {type: CLEAR_DISPLAY};
}

export const memoryAdd = () => {
    return {type: MEMORY_ADD};
}