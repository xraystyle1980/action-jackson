import React from 'react'
import logo from '../assets/images/logo-trice-design.svg';
import styled from 'styled-components'


const LogoContainer = styled.div`
  margin: 12em 0 4em 0;
  img {
    max-width: 100%;
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
