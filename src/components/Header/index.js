import React from 'react';
import styled from 'styled-components';

import { HiOutlineShoppingBag } from 'react-icons/hi'
import { cor5, cor3 } from '../UI/variaveis';
import logo from '../../assets/images/Pimentas/logo1edit.png'

const Cabecalho = styled.header`
  margin-top: 10px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
`
const Logo = styled.img`
  width: 250px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Lista = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 400px;
`
const ItemLista = styled.li`
  cursor: pointer;
`
const Span = styled.span`
  color: ${cor5};
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  font-size: 0.9rem;

  &:hover::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: ${cor3};
    top: 100%
  }
`
const SpanActive = styled(Span)`
  &::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: ${cor3};
    top: 100%
  }
`;

function Header() {
  return (
    <Cabecalho>
      <Logo src={logo} alt='logo sgt. peppers' />
      <Nav>
        <Lista>
          <ItemLista>
            <SpanActive>Homepage</SpanActive>
          </ItemLista>
          <ItemLista>
            <Span>Sobre</Span>
          </ItemLista>
          <ItemLista>
            <Span>Shop</Span>
          </ItemLista>
          <ItemLista>
            <Span>Contato</Span>
          </ItemLista>
          <ItemLista>
            <HiOutlineShoppingBag size={32} />
          </ItemLista>
        </Lista>
      </Nav>
    </Cabecalho>
  )

}

export default Header