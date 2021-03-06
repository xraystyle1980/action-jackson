import React from 'react'
import logo from '../assets/images/logo-trice-design.svg';
import styled from 'styled-components'


const LogoContainer = styled.div`
  margin: 4em 0 1.5em 0;
  img {
    max-width: 100%;
    width: 800px;
  }
`;


const Header = (props) => (
  <header>
    <LogoContainer>
      <img src={logo} alt="Matt Trice Design Logo" />
    </LogoContainer>
  </header>
)

export default Header
