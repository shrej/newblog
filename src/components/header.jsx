/* eslint-disable jsx-a11y/accessible-emoji */
import styled from '@emotion/styled';
import React from 'react';
import { A, Link } from './header-footer-anchor';

const Header = styled.header(({ theme }) => ({
  padding: `0 ${theme.spacing}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: theme.headerHeight,
  lineHeight: theme.headerHeight,
  color: theme.textColor,
  [theme.smallMedia]: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    height: '50px',
    lineHeight: '20px'
  },
  [theme.largeMedia]: {
    ...theme.centerPadding
  }
}));

const H1 = styled.h1(({ theme }) => ({
  fontSize: '1.25rem',
  margin: 0,
  [theme.smallMedia]: {
    fontSize: '1rem'
  }
}));

const Nav = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textTransform: 'capitalize',
  a: {
    marginLeft: theme.spacing
  }
}));

const SiteHeader = () => (
  <Header>
    <H1>
      <Link to="/">Shreyans Jain</Link>
    </H1>
    <Nav>
      <Link to="/">About</Link>
      {/* <Link to="/blog">Blog</Link> */}
      <A href="https://github.com/shrej" target="_blank">
        GitHub
      </A>
      <A href="https://www.linkedin.com/in/jainshreyans/" target="_blank">
        LinkedIn
      </A>
      <A href="https://twitter.com/shreyans2" target="_blank">
        Twitter
      </A>
    </Nav>
  </Header>
);

export default SiteHeader;
