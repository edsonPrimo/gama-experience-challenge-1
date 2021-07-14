import React from 'react';
import styled from 'styled-components';

import banner from '../../assets/images/Pimentas/banne-edit3.png'
import {cor3, cor2} from '../UI/variaveis'

const DivBanner = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: right;
  padding-top: 1.7rem;
  margin-top: 1.5rem;

  @media screen and (min-width: 1800px) {
    background-size: cover;
  }
  @media screen and (max-width: 650px) {
    background-position: -1090px;
  }
`
const Titulo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  color: ${cor3};
  text-shadow: 3px 3px #000;
  text-align: center;
`
const ParagrafoBanner = styled.p`
  color: ${cor2};
  font-size: 2rem;
  font-weight: 300;
  top: 50%;
  text-shadow: 2px 2px #000;
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
  padding: 3rem 1rem 2rem 1rem;
  line-height: 1.5;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
const Box = styled.div`
  width: 40%;
  height: 470px;
  padding: 2rem;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  
`
function Banner() {
  return (
    <DivBanner>
      <Box>
        <Titulo>Tempere seu inverno</Titulo>
        <ParagrafoBanner>
          Aproveite 10% de desconto em todo o site e tenha frete grátis assinando nossa newsletter
        </ParagrafoBanner>
      </Box>
    </DivBanner>


  )

}

export default Banner