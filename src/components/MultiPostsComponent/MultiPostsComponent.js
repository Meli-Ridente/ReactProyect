import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getPosts from '../../store/posts/actions'

const MultiPostsComponent = () => {
  const dispatch = useDispatch()
  const {posts, loadingPosts} = useSelector((state) => state.PostsReducer)

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return(
  <Container>
    {posts.map(post =>{
      return(
        <Card>
          <Card.title>
            
          </Card.title>
        </Card>
      )
    })}
  </Container>)
};

MultiPostsComponent.propTypes = {};

MultiPostsComponent.defaultProps = {};

export default MultiPostsComponent;
