import React, {
    ChangeEvent,
} from 'react';
import {S} from "./Styles";
import {Button} from "./Button";

type SettingsPropsType = {
    maxValue: string
    startValue: string
    set:()=>void
    isSet:boolean
    updateMaxValue:(value:string)=>void
    updateStartValue:(value:string)=>void
    errorSet:string
}

export const Settings = (props: SettingsPropsType) => {



    const onChangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.updateMaxValue(event.currentTarget.value)
    }

    const onChangeStartInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.updateStartValue(event.currentTarget.value)
    }

    const onClickSetHandler=()=> {
        props.set()
    };

    return (
        <S.PrimaryBlock>
            <S.SecondaryBlock height={"80px"}>
                <S.BlockInput error={props.errorSet} >
                    <span>max value</span>
                    <input
                        value={props.maxValue}
                        type={"number"}
                        onChange={onChangeMaxInputHandler}/>
                </S.BlockInput>

                <S.BlockInput error={props.errorSet} >
                    <span>start value</span>
                    <input
                        value={props.startValue}
                        type={"number"}
                        onChange={onChangeStartInputHandler}/>
                </S.BlockInput>
            </S.SecondaryBlock>

            <S.SecondaryBlock height={"40px"}>
                {props.errorSet ?
                    <S.Error>{props.errorSet}</S.Error> :
                    <Button isDisabled={props.isSet} onClick={onClickSetHandler} title={"set"}/>}
            </S.SecondaryBlock>
        </S.PrimaryBlock>

    );
};


