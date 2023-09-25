import styled from "styled-components";

type ButtonPropsType={
    errorColor?:string
}

const Button = styled.button<ButtonPropsType>`
  background-color: ${props=> props.errorColor? "red" : "#61dafb"};
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
}

const SecondaryBlock = styled(PrimaryBlock)<SecondaryBlockPropsType>`
  flex-direction: ${props => props.direction || "column"};
  justify-content: ${props => props.justify || "center"};
  height: ${props => props.height || "auto"};
  width: 270px;
`


type BlockInputPropsType={
    errorColor?:string
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
    background-color: ${props=> props.errorColor? "red" : "none"};
  }
`


export const S = {
    Button,
    App,
    SecondaryBlock,
    PrimaryBlock,
    BlockInput,
}