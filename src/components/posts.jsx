import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import groupBy from 'lodash/groupBy';
import last from 'lodash/last';
import PropTypes from 'prop-types';
import React from 'react';

const groupPosts = posts =>
  groupBy(posts, p => last(p.frontmatter.date.split(' ')));

const Header = styled.header(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.smallMedia]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start'
  }
}));

const H3 = styled.h4(({ theme }) => ({
  marginBottom: theme.spacing
}));

const Article = styled.article(({ theme }) => ({
  marginBottom: theme.spacing
}));

const H4 = styled.h4({
  margin: 0
});

const Link = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.textColor,
  transition: 'color 250ms linear',
  ':hover': {
    color: theme.accentColor
  }
}));

const Posts = ({ posts }) => {
  const grouped = groupPosts(posts);
  const years = Object.keys(grouped)
    .sort()
    .reverse();
  return (
    <section>
      {years.map(year => (
        <section key={year}>
          <H3>{year}</H3>
          {grouped[year].map(post => (
            <Article key={post.frontmatter.path}>
              <Header>
                <H4>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </H4>
              </Header>
            </Article>
          ))}
        </section>
      ))}
    </section>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          path: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired
        }).isRequired
      })
    })
  ).isRequired
};

export default Posts;
