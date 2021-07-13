import React from 'react';
import styled from 'styled-components';
import { cor4, cor2, cor5, cor1 } from '../UI/variaveis';

const Box = styled.section`
  height: 200px;
  width: 100%;
  /* background: ${cor4}; */
  text-align: center;
`
const TituloH2 = styled.h2`
  color: ${cor4};
  font-size: 3rem;
  
`
const WrapperDiv = styled.div`
  margin: auto;
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const Input = styled.input`
  border: 2px solid ${cor2};
  width: 500px;
  height: 40px;
  background: transparent;
  margin-top: 1rem;
  
  &::placeholder{
    text-indent: 10px
  }
`
const BtnEnvia = styled.button`
  border: 2px solid ${cor2};
  height: 40px;
  width: 100px;
  margin-left: 20px;
  background: ${cor2};
  color: white;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover{
    background: ${cor1};
    border: 2px solid ${cor5};
    color: #333333
  }

`
function Newsletter() {

  return (
    <Box>
      <WrapperDiv>
        <TituloH2>Junte-se a nós!</TituloH2>
        <span>Fique por dentro de nossas promoções e ganhe frete gratís na primeira compra.
        </span>
        <div style={{marginTop: '1rem'}}>
          <Input placeholder="Digite seu email" />
          <BtnEnvia>Enviar</BtnEnvia>
        </div>

      </WrapperDiv>


    </Box>

  )

}

export default Newsletter