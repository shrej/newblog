import styled from '@emotion/styled';
import React from 'react';

const Footer = styled.footer(({ theme }) => ({
  color: theme.textColor,
  height: theme.headerHeight,
  textTransform: 'uppercase',
  textAlign: 'center',
  opacity: 0.35,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const P = styled.p(({ theme }) => ({
  margin: `${theme.spacingPx / 2}px 0`
}));

const SiteFooter = () => (
  <Footer>
    <P>&copy; 2019 Shreyans Jain</P>
  </Footer>
);

export default SiteFooter;
