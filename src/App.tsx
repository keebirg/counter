import React, {
    useEffect,
    useState
} from 'react';
import {S} from "./components/Styles";
import {Settings} from "./components/Settings";
import {Display} from "./components/Display";

function App() {

    const [maxValue, setMaxValue] = useState<string>("0"); //значения поля max value
    const [startValue, setStartValue] = useState<string>("0");//значения поля start value
    const [currentValue, setСurrentValue] = useState<string>("click set"); // значение текущего значения

    const [isSet, setIsSet] = useState<boolean>(false);// сстояние кнопке set (активна)
    const [isInc, setIsInc] = useState<boolean>(true);// сстояние кнопке inc (не активна)
    const [isReset, setReset] = useState<boolean>(true);// сстояние кнопке inc (не активна)

    const [errorInc, setErrorInc] = useState<string>("");//ошибка настроек
    const [errorSet, setErrorSet] = useState<string>("");//ошибка вывода


    const getBackSaveValue = (key: string, setFunction: (value: (any)) => void) => {
        const tempValue = localStorage.getItem(key)
        if (tempValue) {
            setFunction(JSON.parse(tempValue))
        }
    }

    const setBackSaveValue = (key: string, setFunction: (value: (any)) => void, value: any) => {
        setFunction(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    useEffect(() => {
        getBackSaveValue('currentValue', setСurrentValue)
        getBackSaveValue('maxValue', setMaxValue)
        getBackSaveValue('startValue', setStartValue)

        getBackSaveValue('isSet', setIsSet)
        getBackSaveValue('isInc', setIsInc)
        getBackSaveValue('isReset', setReset)

        getBackSaveValue('errorInc', setErrorInc)
        getBackSaveValue('errorSet', setErrorSet)
    }, [])


    const updateMaxValue = (value: string) => {
        reset();

        if (Number(value) < 0) {
            setBackSaveValue('errorSet', setErrorSet, "max value < 0")
            return
        }
        if (Number(value) < Number(startValue)) {
            setBackSaveValue('errorSet', setErrorSet, "start value > max value")
            return
        }

        setBackSaveValue('maxValue', setMaxValue, value)
        setBackSaveValue('errorSet', setErrorSet, "")
    }


    const updateStartValue = (value: string) => {

        reset();
        if (Number(value) < 0) {
            setBackSaveValue('errorSet', setErrorSet, "start value < 0")
            return;
        }
        if (Number(value) > Number(maxValue)) {
            setBackSaveValue('errorSet', setErrorSet, "start value > max value")
            return;
        }

        setBackSaveValue('startValue', setStartValue, value)
        setBackSaveValue('errorSet', setErrorSet, "")
    }

    const set = () => {              // нажали кнопку set
        setBackSaveValue('isSet', setIsSet, true)
        setBackSaveValue('currentValue', setСurrentValue, startValue)
        setBackSaveValue('isInc', setIsInc, false)
        setBackSaveValue('isReset', setReset, false)
        setBackSaveValue('errorInc', setErrorInc, "")
    }

    const inc = () => {            // нажали кнопку inc
        if (Number(maxValue) > Number(currentValue)) {
            setBackSaveValue('currentValue', setСurrentValue, `${Number(currentValue) + 1}`)
            setBackSaveValue('isSet', setIsSet, false)
            return;
        }
        setBackSaveValue('errorInc', setErrorInc, "fail")
        setBackSaveValue('isInc', setIsInc, true)
    }

    const reset = () => {           // нажали кнопку reset
        setBackSaveValue('currentValue', setСurrentValue, startValue)
        setBackSaveValue('isSet', setIsSet, false)
        setBackSaveValue('errorInc', setErrorInc, "")
        setBackSaveValue('isInc', setIsInc, false)
    }

    return (
        <S.App>
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                set={set}
                isSet={isSet}
                updateMaxValue={updateMaxValue}
                updateStartValue={updateStartValue}
                errorSet={errorSet}/>

            <Display
                currentValue={currentValue}
                isInc={isInc}
                isReset={isReset}
                inc={inc}
                reset={reset}
                errorInc={errorInc}/>
        </S.App>
    );
}

export default App;

