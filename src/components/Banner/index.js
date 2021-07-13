import React from 'react';
import styled from 'styled-components';

import banner from '../../assets/images/Pimentas/banner-edit.png'
import {cor3, cor1, cor2, cor5, cor4} from '../UI/variaveis'

const DivBanner = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: right;
  padding-top: 1.7rem;
`
const Titulo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  color: ${cor3};
  text-shadow: 3px 3px #000;
  text-align: center;
`
const ParagrafoBanner = styled.p`
  color: ${cor4};
  font-size: 2rem;
  top: 50%;
  text-shadow: 2px 2px #000;
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
  padding: 3rem 1rem 2rem 1rem;
  line-height: 1.5;
`
const Box = styled.div`
  width: 40%;
  height: 450px;
  background: rgba(0, 0, 0, 0.101);
  padding: 3rem 1.2rem;
  border-radius: 8px;
  
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