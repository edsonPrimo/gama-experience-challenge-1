import React from 'react';
import styled from 'styled-components';

import { cor4, cor3, cor1, cor5 } from '../UI/variaveis';

import logoRotulo from '../../assets/images/Pimentas/logo_rotulo-edit.png'

import pimenta2 from '../../assets/images/Pimentas/pimenta1.png'
import pimenta3 from '../../assets/images/Pimentas/pimenta2.png'
import pimenta1 from '../../assets/images/Pimentas/pimenta3.png'

const SectionProdutos = styled.section`
  padding: 10rem 0;
`
const Box = styled.div`
  background: transparent;
  width: 250px;
  border-radius: 8px;
 
`;
const ProdutosH2 = styled.h2`
  font-family: 'Alex Brush', cursive;
  text-align: center;
  font-size: 4rem;
  color: ${cor4};
`;
const ProdutosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`
const ImagemProdutos = styled.img`
  display: block;
  width: 250px;
  height: 250px;
`
const ProdutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: url(${logoRotulo});
  background-position: 5px 15px;
  background-repeat: no-repeat;
  background-size: 250px;

  &::hover {
    border: 2px solid ${cor3};
  }
`
const NomeProduto = styled.span`
  text-transform: uppercase;
  color: ${cor5};
  background: ${cor1};
  padding: 0.3rem;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
`
const PrecoProduto = styled.span`
  margin-top: 0.5rem;
  font-family: 'Montserrat', sans-serif;
`

function Produtos() {
  return (
    <SectionProdutos>

      <ProdutosH2>Nossos sabores</ProdutosH2>
      <ProdutosContainer id="produtos">
        <ProdutoWrapper>
          <Box>
            <ImagemProdutos src={pimenta1} alt='Pimenta Jaum' />
          </Box>
          <NomeProduto>Pimenta X</NomeProduto>
          <PrecoProduto>R$ 0,12</PrecoProduto>
        </ProdutoWrapper>
        <ProdutoWrapper>
          <Box>
            <ImagemProdutos src={pimenta2} alt='Pimenta Jhonas' />
          </Box>
          <NomeProduto>Pimenta Forte</NomeProduto>
          <PrecoProduto>R$ 0,12</PrecoProduto>
        </ProdutoWrapper>
        <ProdutoWrapper>
          <Box>
            <ImagemProdutos src={pimenta3} alt='Pimenta Jaum' />
          </Box>
          <NomeProduto>Pimenta Y</NomeProduto>
          <PrecoProduto>R$ 0,12</PrecoProduto>
        </ProdutoWrapper>

      </ProdutosContainer>
    </SectionProdutos>
  )

}

export default Produtos