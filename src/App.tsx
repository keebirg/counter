import React, {useState} from 'react';
import {S} from "./components/Styles";
import {Settings} from "./components/Settings";
import {Display} from "./components/Display";

export const App = () => {

    const [maxValue, setMaxValue] = useState<string>("0");
    const [startValue, setStartValue] = useState<string>("0");
    const [currentValue, setСurrentValue] = useState<string>("click set");
    const [isSet, setIsSet] = useState<boolean>(false)
    const [isInc, setIsInc] = useState<boolean>(true)
    const [isReset, setReset] = useState<boolean>(true)

    const [errorInc, setErrorInc] = useState<string>("");


    const set = () => {
        setIsSet(true);
        setСurrentValue(startValue);
        setIsInc(false);
        setReset(false);
    }

    const inc = () => {
        if(Number(maxValue)>Number(currentValue)){
            setСurrentValue(`${Number(currentValue)+1}`)
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
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                set={set}
                isSet={isSet}
                setIsSet={setIsSet}/>

            <Display currentValue={currentValue}
                     isInc={isInc}
                     isReset={isReset}
                     inc={inc}
                     reset={reset}
                     errorInc={errorInc}/>
        </S.App>
    );
}

