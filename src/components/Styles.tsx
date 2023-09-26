import styled from "styled-components";

type ButtonPropsType={
    error?:string
}

const Button = styled.button<ButtonPropsType>`
  background-color: ${props=> props.error? "red" : "#61dafb"};
  font: 20pt sans-serif;
  border-radius: 7px;
  cursor: pointer;
  
`

const App = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;

  background-color: #282c34;
`

const PrimaryBlock = styled.div`
  border: 2px solid #61dafb;
  border-radius: 7px;
  color: #61dafb;
  max-width: 300px;
  width: 100%;
  padding: 15px 0;

  font: 40pt sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

type SecondaryBlockPropsType = {
    height?: string
    justify?: string
    direction?: string
    error?:string
}

const SecondaryBlock = styled(PrimaryBlock)<SecondaryBlockPropsType>`
  flex-direction: ${props => props.direction || "column"};
  justify-content: ${props => props.justify || "center"};
  height: ${props => props.height || "auto"};
  color: ${props => props.error? "red": "none" };
  width: 270px;
`


type BlockInputPropsType={
    error?:string
}

const BlockInput = styled.div<BlockInputPropsType>`
  width: 100%;
  display: flex;
  justify-content: space-around;

  
  
  span{
    font: 16pt sans-serif
  }

  input {
    width: 100px;
    background-color: ${props=> props.error? "red" : "none"};
    border-radius: 7px;
    text-align: center;
    font-weight: bold;
  }
`

const Error = styled.span`
  color: red;
  font-size: 14pt;
`

export const S = {
    Button,
    App,
    SecondaryBlock,
    PrimaryBlock,
    BlockInput,
    Error,
}