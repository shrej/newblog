import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import siteShape from '../shapes/site';

const maLink = (
  <a href="https://www.youtube.com/watch?v=JvUMV1N7eGM">Massachusetts</a>
);
const ghLink = <a href="https://github.com/knpwrs">my GitHub</a>;
const patsLink = <a href="http://www.patriots.com/">New England Patriots</a>;

const ResumeHeader = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0
  }
}));

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
  ...theme.centerPadding
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
        My name is Shreyans, and I am a senior Software Engineer at Salesforce.
        In past, I worked at Gallup,Inc. and Virtual Environment and Multimodal
        interaction lab at The University of Maine. Feel free to have a look at
        some of my open source projects.
        Stay tuned for more content as I migrate my old website to the new one :)
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
