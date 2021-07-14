import React, { useState } from 'react';
import styled from 'styled-components';
import { cor4 } from '../UI/variaveis';

import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im'

const Rodape = styled.footer`
  height: 20vh;
  background: ${cor4};
  padding: 1rem;
`
const Titulo = styled.h3`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`

const Paragrafo = styled.p`
  text-align: center;
`
const BoxSocialMedias = styled.div`
  display: flex;
  width: 200px;
  margin: 1rem auto;
  justify-content: space-between;

  a {
    color: inherit
  }

`
const Span = styled.span`
  background: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
function Footer() {

  return (
    <Rodape id="contato">
      <Titulo>Fale com a gente!</Titulo>
      <Paragrafo>©Copyright EdboaDev.</Paragrafo>
      <Paragrafo>Landing page feita para o desafio da Gama Academy</Paragrafo>
      <BoxSocialMedias>
        <a href='https://www.facebook.com/edson.primo.5'>
          <Span><ImFacebook size='24' /></Span>
        </a>
        <a href='https://www.instagram.com/edson.primo/'>
          <Span><ImInstagram size='24' /></Span>
        </a>
        <a href='https://twitter.com/edboaaa'>
          <Span><ImTwitter size='24' /></Span>
        </a>
      </BoxSocialMedias>
    </Rodape>
  )
}

export default Footer