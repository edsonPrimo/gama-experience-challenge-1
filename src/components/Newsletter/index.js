import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll'
import { cor4, cor2, cor5, cor1 } from '../UI/variaveis';

const Box = styled.section`
  height: 200px;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`
const TituloH2 = styled.h2`
  color: ${cor4};
  font-size: 3rem;
  
`
const Container = styled.div`
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 90%
  }
`
const WrapperInputs = styled.div`
   display: flex;
   align-items: center;
   margin-top: 1.5rem;
   width: 100%;
`
const Input = styled.input`
  border: 2px solid ${cor2};
  width: 100%;
  height: 50px;
  background: transparent;
  text-indent: 10px;
  font-size: 1.2rem;
  
  &::placeholder{
    text-indent: 10px;
  }
`
const BtnEnvia = styled.button`
  border: 2px solid ${cor2};
  height: 50px;
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
const ImagemScroll = styled.img`
  display:block;
  animation: scrollAnimate 2s infinite;

  @keyframes scrollAnimate {
  0%  {transform: translate3d(0px, 0px, 0px);}
  50% {transform: translate3d(0px, 25px, 0px);}
  }
  
`
function Newsletter() {
  const [emailInput, setEmailInput] = useState('')
  const emailCadastrados = []

  function handleBtnEnviar() {
    if(emailInput) {
      emailCadastrados.push(emailInput)
      localStorage.setItem('EmailsNewsLetter', emailCadastrados)
      setEmailInput('')
      alert('Obrigado por se inscrever no nosso site')
    }
  }

  return (
    <Box>
      <Container>
        <TituloH2>Junte-se a nós!</TituloH2>
        <span>Fique por dentro de nossas promoções e ganhe frete gratís na primeira compra.
        </span>
        <WrapperInputs >
          <Input placeholder="Digite seu email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
          <BtnEnvia onClick={handleBtnEnviar}>Enviar</BtnEnvia>
        </WrapperInputs>
        <div style={{ marginTop: '5rem' }}>
          <Link to="produtos" spy={true} smooth={true}> <ImagemScroll src='https://bridge149.qodeinteractive.com/wp-content/uploads/2018/01/home-slider-img-4.png' /></Link>

        </div>
      </Container>
    </Box>

  )

}

export default Newsletter