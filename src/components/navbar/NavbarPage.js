import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Theme,
} from '@carbon/react';

const NavbarPage = () => {
  return (
    <div className='container'>
      <Theme theme=''>
        <Header aria-label='IBM Platform Name'>
          <HeaderName href='/'>[Platform]</HeaderName>
          <HeaderNavigation aria-label='IBM [Platform]'>
            <HeaderMenuItem href='Products'>Products</HeaderMenuItem>
            <HeaderMenuItem href='/solutions'>Solutions</HeaderMenuItem>
            <HeaderMenuItem href='#'>Link 3</HeaderMenuItem>
            <HeaderMenu aria-label='Link 4' menuLinkName='Link 4'>
              <HeaderMenuItem href='#'>Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href='#'>Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href='#'>Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
        </Header>
      </Theme>
    </div>
  );
};

export default NavbarPage;
