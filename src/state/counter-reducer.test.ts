import {counterReducer, counterStateType, incAC, updateMaxValueAC, updateStartValueAC} from "./counter-reducer";

const startState: counterStateType = {
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
        maxValue: "10",
        startValue: "5",
        currentValue: "0"
    }
}

test('correct counter updateMaxValue checked error', () => {
    const action1 = updateMaxValueAC('-2')
    const andState1 = counterReducer(startState, action1)

    expect(andState1.value.maxValue).toBe('10')
    expect(startState.value.maxValue).toBe('10')
    expect(andState1.error.errorSet).toBe("max value < 0")
    expect(startState.error.errorSet).toBe("")

    const action2 = updateMaxValueAC('4')
    const andState2 = counterReducer(startState, action2)

    expect(andState2.value.maxValue).toBe('10')
    expect(startState.value.maxValue).toBe('10')
    expect(andState2.error.errorSet).toBe("start value > max value")
    expect(startState.error.errorSet).toBe("")
});

test('correct counter updateMaxValue', () => {
    const action = updateMaxValueAC('7')
    const andState = counterReducer(startState, action)

    expect(andState.value.maxValue).toBe('7')
    expect(startState.value.maxValue).toBe('10')
});

test('correct counter updateStartValue checked error', ()=>{
    const action1=updateStartValueAC('11')
    const andState1 = counterReducer(startState, action1)

    expect(andState1.value.startValue).toBe('5')
    expect(startState.value.startValue).toBe('5')
    expect(andState1.error.errorSet).toBe("start value > max value")
    expect(startState.error.errorSet).toBe("")

    const action2=updateStartValueAC('-2')
    const andState2 = counterReducer(startState, action2)

    expect(andState2.value.startValue).toBe('5')
    expect(startState.value.startValue).toBe('5')
    expect(andState2.error.errorSet).toBe("start value < 0")
    expect(startState.error.errorSet).toBe("")
})

test('correct counter updateStartValue', ()=>{
    const action=updateStartValueAC('1')
    const andState = counterReducer(startState, action)

    expect(andState.value.startValue).toBe('1')
    expect(startState.value.startValue).toBe('5')
})

test('correct counter click inc', ()=>{
    const action=incAC();
    const endState=counterReducer(startState, action)

    expect(endState.value.currentValue).toBe("1")
    expect(startState.value.currentValue).toBe("0")
})