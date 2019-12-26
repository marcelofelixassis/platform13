import React from 'react'
import { HeaderContainer, Title, Components } from './styled'
import { FaWhmcs } from 'react-icons/fa'

const Header = ({pageTitle}) => (
  <HeaderContainer>
    <Components>
      <Title>
        {pageTitle}
      </Title>
      <FaWhmcs fill="#fff" size={25} />
    </Components>
  </HeaderContainer>
);

export default Header;
