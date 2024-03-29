export type counterStateType = {
    flag: {
        isSet: boolean
        isInc: boolean
        isReset: boolean
    }
    error: {
        errorInc: string
        errorSet: string
    }
    value: {
        maxValue: string
        startValue: string
        currentValue: string
    }
}

type updateMaxValueActionType = {
    type: 'UPDATE-MAX-VALUE'
    value: string
}
type updateStartValueActionType = {
    type: 'UPDATE-START-VALUE'
    value: string
}
type incActionType = {
    type: 'INC'
}
type resetActionType = {
    type: 'RESET'
}
type setActionType = {
    type: 'SET'
}

type actionType =
    updateMaxValueActionType |
    updateStartValueActionType |
    incActionType |
    resetActionType |
    setActionType

let initialState: counterStateType = {
    flag: {
        isSet: false,
        isInc: true,
        isReset: true
    },
    error: {
        errorInc: "",
        errorSet: ""
    },
    value: {
        maxValue: "0",
        startValue: "0",
        currentValue: "click set"
    }
}



export const counterReducer = (state: counterStateType = initialState, action: actionType): counterStateType => {
    switch (action.type) {
        case 'UPDATE-MAX-VALUE': {
            const newState = counterReducer(state, resetAC())
            if (Number(action.value) < 0) {
                newState.error.errorSet = "max value < 0"
                return newState
            }
            if (Number(action.value) < Number(state.value.startValue)) {
                newState.error.errorSet = "start value > max value"
                return newState
            }

            newState.value.maxValue = action.value
            newState.error.errorSet = ""
            return newState
        }

        case 'UPDATE-START-VALUE': {
            const newState = counterReducer(state, resetAC())

            if (Number(action.value) < 0) {
                newState.error.errorSet = "start value < 0"
                return newState;
            }
            if (Number(action.value) > Number(state.value.maxValue)) {
                newState.error.errorSet = "start value > max value"
                return newState;
            }

            newState.value.startValue = action.value
            newState.error.errorSet = ""
            return newState;
        }

        case 'INC': {
            const newState = {...state, value: {...state.value}, flag: {...state.flag}, error: {...state.error}};

            if (Number(newState.value.maxValue) > Number(newState.value.currentValue)) {
                newState.value.currentValue = `${Number(state.value.currentValue) + 1}`;
                newState.flag.isSet = false;
                return newState;
            }

            newState.error.errorInc = "fail";
            newState.flag.isInc = true;
            return newState;
        }

        case'RESET': {
            const newState = {...state, value: {...state.value}, flag: {...state.flag}, error: {...state.error}};

            newState.value.currentValue = newState.value.startValue;
            newState.flag.isSet = false;
            newState.flag.isInc = false;
            newState.error.errorInc = "";
            return newState;
        }
        case'SET': {
            const newState = {...state, value: {...state.value}, flag: {...state.flag}, error: {...state.error}};

            newState.value.currentValue = newState.value.startValue;
            newState.flag.isSet = true;
            newState.flag.isInc = false;
            newState.flag.isReset = false;
            newState.error.errorInc = "";
            return newState;
        }


        default:
            return state;
    }
}

export const updateMaxValueAC = (value: string): updateMaxValueActionType => {
    return {type: 'UPDATE-MAX-VALUE', value: value}
}
export const updateStartValueAC = (value: string): updateStartValueActionType => {
    return {type: 'UPDATE-START-VALUE', value: value}
}

export const incAC = (): incActionType => {
    return {type: 'INC'}
}

export const resetAC = (): resetActionType => {
    return {type: 'RESET'}
}
export const setAC = (): setActionType => {
    return {type: 'SET'}
}