import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import styles1 from '../app/App.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Posts({ posts, onChange, term }) {
  const listOfPosts = posts.map((post, i) => {
    return (
      <li key={i}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <div className={styles1.postsContainer}>
      <h2 className={styles1.postsTitle}>Posts</h2>      
      <Input type="text" name="term" value={term} onChange={onChange}
        placeholder="Search"
        inputProps={{
          'aria-label': 'Description',
        }}
        className={styles1.search}
      />
      <ul>
        {listOfPosts}
      </ul>
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  term: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(styles)(Posts);
