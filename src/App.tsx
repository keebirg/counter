import React, {
    useEffect,
    useState
} from 'react';
import {S} from "./components/Styles";
import {Settings} from "./components/Settings";
import {Display} from "./components/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {counterStateType, incAC, resetAC, setAC, updateMaxValueAC, updateStartValueAC} from "./state/counter-reducer";

function App() {

    const dispatch = useDispatch()
    const counterPrimaryData = useSelector<AppRootState, counterStateType>(state => state.counter)


    // const getBackSaveValue = (key: string, setFunction: (value: (any)) => void) => {
    //     const tempValue = localStorage.getItem(key)
    //     if (tempValue) {
    //         setFunction(JSON.parse(tempValue))
    //     }
    // }
    //
    // const setBackSaveValue = (key: string, setFunction: (value: (any)) => void, value: any) => {
    //     setFunction(value);
    //     localStorage.setItem(key, JSON.stringify(value));
    // }

    // useEffect(() => {
    //     getBackSaveValue('currentValue', setСurrentValue)
    //     getBackSaveValue('maxValue', setMaxValue)
    //     getBackSaveValue('startValue', setStartValue)
    //
    //     getBackSaveValue('isSet', setIsSet)
    //     getBackSaveValue('isInc', setIsInc)
    //     getBackSaveValue('isReset', setReset)
    //
    //     getBackSaveValue('errorInc', setErrorInc)
    //     getBackSaveValue('errorSet', setErrorSet)
    // }, [])


    const updateMaxValue = (value: string) => {
        dispatch(updateMaxValueAC(value))
    }

    const updateStartValue = (value: string) => {
        dispatch(updateStartValueAC(value))
    }

    const set = () => {              // нажали кнопку set
        dispatch(setAC())
    }

    const inc = () => {            // нажали кнопку inc
        dispatch(incAC())
    }

    const reset = () => {           // нажали кнопку reset
        dispatch(resetAC())
    }

    return (
        <S.App>
            <Settings
                maxValue={counterPrimaryData.value.maxValue}
                startValue={counterPrimaryData.value.startValue}
                set={set}
                isSet={counterPrimaryData.flag.isSet}
                updateMaxValue={updateMaxValue}
                updateStartValue={updateStartValue}
                errorSet={counterPrimaryData.error.errorSet}/>

            <Display
                currentValue={counterPrimaryData.value.currentValue}
                isInc={counterPrimaryData.flag.isInc}
                isReset={counterPrimaryData.flag.isReset}
                inc={inc}
                reset={reset}
                errorInc={counterPrimaryData.error.errorInc}/>
        </S.App>
    );
}

export default App;

