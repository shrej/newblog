/* eslint-disable react/no-danger */
import styled from '@emotion/styled';
import dateformat from 'dateformat';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PostNav from '../components/post-nav';
import CodeStyle from '../emotion/code';
import pageContextShape from '../shapes/page-context';
import postShape from '../shapes/post';
import site from '../shapes/site';

const Main = styled.main(({ theme }) => ({
  color: theme.textColor
}));

const Header = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  [theme.smallMedia]: {
    flexDirection: 'column',
    flexWrap: 'nowrap'
  }
}));

const HeaderTitle = styled.h1(({ theme }) => ({
  width: '85%',
  marginBottom: theme.spacing,
  [theme.smallMedia]: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 0
  }
}));

const HeaderDate = styled.time(({ theme }) => ({
  width: '15%',
  textAlign: 'right',
  [theme.smallMedia]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const Footer = styled.footer(({ theme }) => ({
  ...theme.centerPadding
}));

const PostWrap = styled.section(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '> *': {
    width: '100vw',
    wordWrap: 'break-word',
    ':not(.gatsby-highlight)': {
      ...theme.centerPadding
    }
  },
  '> .gatsby-highlight > pre': {
    ...theme.centerPadding,
    paddingTop: theme.spacing,
    paddingBottom: theme.spacing
  },
  '>ul,>ol': {
    marginLeft: `${theme.spacingPx * 4}px`,
    width: `calc(100% - ${theme.spacingPx * 4}px)`
  }
}));

const PostNavWrap = styled.div(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: theme.spacing
}));

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { title, siteUrl } = data.site.siteMetadata;
  const { next, prev } = pageContext;

  const isProduction = process.env.NODE_ENV === 'production';
  const fullUrl = `${siteUrl}${post.frontmatter.path}`;

  return (
    <Layout>
      <CodeStyle />
      <Main>
        <Helmet>
          <title>
            {post.frontmatter.title} &middot; {title}
          </title>
        </Helmet>
        <article>
          <Header>
            <HeaderTitle>{post.frontmatter.title}</HeaderTitle>
            <HeaderDate
              dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}
            >
              {dateformat(post.frontmatter.date, 'mmmm d, yyyy')}
            </HeaderDate>
          </Header>
          <PostWrap dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <PostNavWrap>
          <PostNav prev post={prev} />
          <PostNav next post={next} />
        </PostNavWrap>
      </Main>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    site,
    markdownRemark: postShape
  }).isRequired,
  pageContext: pageContextShape.isRequired
};

export default BlogPost;

export const query = graphql`
  query BlogPostByPath($refPath: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $refPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;
