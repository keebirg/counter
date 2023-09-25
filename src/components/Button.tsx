import React from 'react';
import {S} from "./Styles";

type ButtonPropsType={
    title: string
    errorColor?:string
    onClick:()=>void
    isDisabled:boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler=()=> props.onClick()
    return (
        <S.Button
            errorColor={props.errorColor}
            disabled={props.isDisabled}
            onClick={onClickButtonHandler}>{props.title}
        </S.Button>
    );
};
