import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import siteShape from '../shapes/site';
import profilePhoto from '../images/shreyans-profile.jpg';
import { graphql } from 'gatsby';

const salesforce = (
  <a href="https://www.salesforce.com" target="_blank">
    Salesforce
  </a>
);
const gallup = (
  <a href="https://gallup.com" target="_blank">
    Gallup
  </a>
);
const vemiLab = (
  <a href="https://umaine.edu/vemi/" target="_blank">
    Virtual Environment and Multimodal Interaction Lab (VEMI Lab)
  </a>
);
const github = (
  <a href="https://github.com/shrej" target="_blank">
    personal projects
  </a>
);
const recentTalk = (
  <a href="https://www.youtube.com/watch?v=-pXX70Ksi5g" target="_blank">
    recent
  </a>
);
const conferenceTalk = (
  <a href="https://www.youtube.com/watch?v=TXTsjpevvKE" target="_blank">
    talks
  </a>
);
const graduateResearch = (
  <a
    href="https://scholar.google.com/citations?user=FFK-TwkAAAAJ&hl=en"
    target="_blank"
  >
    graduate research
  </a>
);

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
  fontSize: '1.2rem',
  lineHeight: '2.5rem',
  fontFamily: 'Lato',
  fontWeight: '300'
}));
const Ul = styled.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`
}));
const Container = styled.div``;
const ProfilePic = styled.img`
  display: block;
  margin: auto;
  max-height: 300px;
`;
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
      <Container>
        <ProfilePic
          src={profilePhoto}
          alt="Me(Shrey) at the Golden Gate Bridge in San Francisco."
        />
        <P>
          Hello! I am a senior software engineer at {salesforce}. In past, I
          worked at {gallup} and the {vemiLab} at The University of Maine. I
          have a keen interest in developing <i>useful, </i>
          <i>usable, </i> and <i>delightful </i> user interfaces.
        </P>
        <P>
          Feel free to have a look at some of my {github}, learn more about my{' '}
          {graduateResearch}, or watch some of my {recentTalk} confrence{' '}
          {conferenceTalk}.
        </P>
      </Container>
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
