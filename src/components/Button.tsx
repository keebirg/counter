import React from 'react';
import {S} from "./Styles";

type ButtonPropsType={
    title: string
    error?:string
    onClick:()=>void
    isDisabled:boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler=()=> props.onClick()
    return (
        <S.Button
            error={props.error}
            disabled={props.isDisabled}
            onClick={onClickButtonHandler}>{props.title}
        </S.Button>
    );
};
