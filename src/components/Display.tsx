import React from 'react';
import {S} from "./Styles";
import {Button} from "./Button";

type DisplayPropsType={
    currentValue:string
    isInc:boolean
    isReset:boolean
    inc:()=>void
    reset:()=>void
    errorInc:string
}

export const Display = (props: DisplayPropsType) => {

    const inc=()=> props.inc();
    const reset=()=>props.reset();

    return (
        <S.PrimaryBlock>
            <S.SecondaryBlock error={props.errorInc} height={"80px"}>
                {props.currentValue}
            </S.SecondaryBlock>

            <S.SecondaryBlock height={"40px"} direction={"row"} justify={"space-around"}>
                <Button
                    error={props.errorInc}
                    isDisabled={props.isInc}
                    onClick={inc}
                    title={"inc"}/>
                <Button
                    isDisabled={props.isReset}
                    onClick={reset}
                    title={"reset"}/>
            </S.SecondaryBlock>

        </S.PrimaryBlock>
    );
};
