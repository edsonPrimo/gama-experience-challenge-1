import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { cor5, cor3 } from '../UI/variaveis';
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/images/Pimentas/logo.png'

const Cabecalho = styled.header`
  margin-top: 10px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

`
const Logo = styled.img`
  max-width: 300px;
  @media screen and (max-width: 650px) {
    width: 230px;
  }
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
  width: 350px;  
  @media screen and (max-width: 650px) {
    display: none;
  }
`
const ItemLista = styled.li`
  cursor: pointer;
`
const MenuHamburguer = styled.span`
  display: none;
  @media screen and (max-width: 650px) {
    display: block;
  }
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
    top: 112%
  }
`;

function Header() {

  return (

    <Cabecalho>
      <Logo src={logo} alt='logo sgt. peppers' />

      <MenuHamburguer><GiHamburgerMenu size={32} color={'#643939'} /></MenuHamburguer>
      <Nav>
        <Lista>
          <ItemLista>
            <SpanActive>Homepage</SpanActive>
          </ItemLista>
          <ItemLista>
            <Link to="produtos" spy={true} smooth={true}> <Span>Shop</Span> </Link>
          </ItemLista>
          <ItemLista>
          <Link to="contato" spy={true} smooth={true}><Span>Contato</Span></Link>
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