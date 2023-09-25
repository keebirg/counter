import React, {useState} from 'react';
import {S} from "./components/Styles";
import {Settings} from "./components/Settings";
import {Display} from "./components/Display";

export const App = () => {

    const [maxValue, setMaxValue] = useState<string>("0"); //значения поля max value
    const [startValue, setStartValue] = useState<string>("0");//значения поля start value
    const [currentValue, setСurrentValue] = useState<string>("click set"); // значение текущего значения
    const [isSet, setIsSet] = useState<boolean>(false);// сстояние кнопке set (активна)
    const [isInc, setIsInc] = useState<boolean>(true);// сстояние кнопке inc (не активна)
    const [isReset, setReset] = useState<boolean>(true);// сстояние кнопке inc (не активна)

    const [errorInc, setErrorInc] = useState<string>("");//ошибка настроек
    const [errorSet, setErrorSet] = useState<string>("");//ошибка вывода


    const updateMaxValue = (value: string) => {
        reset();
        if (Number(value) < 0) {
            setErrorSet("max value < 0");
            return;
        } else if (Number(value) < Number(startValue)) {
            setErrorSet("start value > max value");
        } else {
            setMaxValue(value)
            setErrorSet("");
        }
    }


    const updateStartValue = (value: string) => {
        reset();
        if (Number(value) < 0) {
            setErrorSet("start value < 0");
        } else if (Number(value) > Number(maxValue)) {
            setErrorSet("start value > max value");
        } else {
            setStartValue(value)
            setErrorSet("");
        }
    }

    const set = () => {
        setIsSet(true);
        setСurrentValue(startValue);
        setIsInc(false);
        setReset(false);
    }

    const inc = () => {
        if (Number(maxValue) > Number(currentValue)) {
            setСurrentValue(`${Number(currentValue) + 1}`)
        } else {
            setErrorInc("fail")
            setIsInc(true)
        }

    }

    const reset = () => {
        setСurrentValue("click set");
        setIsSet(false);
        setIsInc(true);
        setReset(true);
        setErrorInc("");
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

