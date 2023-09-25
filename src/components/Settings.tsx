import React, {
    ChangeEvent,
    useState
} from 'react';
import {S} from "./Styles";
import {Button} from "./Button";
import styled from "styled-components";

type SettingsPropsType = {
    maxValue: string
    startValue: string
    setMaxValue: (value: string) => void
    setStartValue: (value: string) => void
    set:()=>void
    isSet:boolean
    setIsSet:(value:boolean)=>void
}

export const Settings = (props: SettingsPropsType) => {

    const [error, setError] = useState<string>("");

    const onChangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setIsSet(false);

        if (Number(event.currentTarget.value) < 0) {
            setError("max value < 0");
            return;
        } else if(Number(event.currentTarget.value) < Number(props.startValue)){
            setError("start value > max value");
        }else {
            props.setMaxValue(event.currentTarget.value)
            setError("");
        }
    }

    const onChangeStartInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setIsSet(false);

        if (Number(event.currentTarget.value) < 0) {
            setError("start value < 0");
        } else if (Number(event.currentTarget.value) > Number(props.maxValue)) {
            setError("start value > max value");
        } else {
            props.setStartValue(event.currentTarget.value)
            setError("");
        }
    }

    const onClickSetHandler=()=>props.set();

    return (
        <S.PrimaryBlock>
            <S.SecondaryBlock height={"80px"}>
                <S.BlockInput errorColor={error} >
                    <span>max value</span>
                    <input
                        value={props.maxValue}
                        type={"number"}
                        onChange={onChangeMaxInputHandler}/>
                </S.BlockInput>

                <S.BlockInput errorColor={error} >
                    <span>start value</span>
                    <input
                        value={props.startValue}
                        type={"number"}
                        onChange={onChangeStartInputHandler}/>
                </S.BlockInput>
            </S.SecondaryBlock>

            <S.SecondaryBlock height={"40px"}>
                {error ?
                    <Error>{error}</Error> :
                    <Button isDisabled={props.isSet} onClick={onClickSetHandler} title={"set"}/>}
            </S.SecondaryBlock>
        </S.PrimaryBlock>

    );
};

const Error = styled.span`
  color: red;
  font-size: 14pt;
`
