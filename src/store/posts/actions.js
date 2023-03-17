import axios from 'axios'
import {
  GET_POSTS,
  GET_POSTS_FAIL,
  GET_POSTS_OK
} from './actionTypes'

export function actionGetPosts (){
  return {
    type: GET_POSTS
  }
}

export function actionGetPostsOk(posts) {
  return {
    type: GET_POSTS_OK,
    payload: posts
  }
}

export function actionGetPostsFail (error) {
  return {
    type: GET_POSTS_FAIL,
    payload: error
  }
}

export function getPosts () {
  return async (dispatch) => {
    dispatch(actionGetPosts())

    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      dispatch(actionGetPostsOk(response.data))
    }
    catch(error){
      dispatch(actionGetPostsFail(error))
    }
  }
}