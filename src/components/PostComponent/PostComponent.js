import React from 'react';
import PropTypes from 'prop-types';
import MultiPostsComponent from '../components/MultiPostsComponent/MultiPostsComponent'

const PostComponent = () => (
  <div>
    <h1>Posts Page.</h1>
    <MultiPostsComponent></MultiPostsComponent>
  </div>
);

PostComponent.propTypes = {};

PostComponent.defaultProps = {};

export default PostComponent;
