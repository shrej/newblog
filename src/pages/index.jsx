import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import siteShape from '../shapes/site';

const salesforce = (
  <a href="https://www.salesforce.com" target="_blank">Salesforce</a>
);
const gallup = <a href="https://gallup.com" target="_blank">Gallup</a>;
const vemiLab = <a href="https://umaine.edu/vemi/" target="_blank">Virtual Environment and Multimodal interaction lab</a>;
const github = <a href="https://github.com/shrej" target="_blank">Personal projects.</a>


const H2 = styled.h2(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing
}));
const H3 = styled.h3(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing
}));
const H4 = styled.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing
}));
const P = styled.p(({ theme }) => ({
  ...theme.centerPadding,
  fontSize: '1.5rem',
  lineHeight: '3rem'
}));
const Ul = styled.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`
}));

const About = ({
  data: {
    site: { siteMetadata: site }
  }
}) => (
  <Layout>
    <main>
      <Helmet>
        <title>About &middot; {site.title}</title>
      </Helmet>
      <H2>About me</H2>
      <P>
        Hi!
        My name is Shreyans, and I am a senior Software Engineer at {salesforce}.
        In past, I worked at {gallup} and the {vemiLab} at The University of Maine. Feel free to have a look at
        some of my {github} Stay tuned for more content as I migrate my old website to the new one..
      </P>
    </main>
  </Layout>
);

About.propTypes = {
  data: PropTypes.shape({
    site: siteShape
  }).isRequired
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
