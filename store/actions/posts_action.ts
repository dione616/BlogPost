import axios from "axios"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../reducers"
import { AnyAction, Action } from "redux"

export interface Post {
  id: number
  title: String
  body: String
}

export const GET_POSTS = "postsEvents/GET_POSTS"
export const EDIT_POSTS = "postsEvents/EDIT_POSTS"

export interface GetPostsRequestAction extends Action<typeof GET_POSTS> {
  payload: {
    posts: Post[]
  }
}
export interface EditPostRequestAction extends Action<typeof EDIT_POSTS> {
  payload: {
    posts: Post
  }
}

//async action
export const getPosts = (): ThunkAction<void, RootState, undefined, GetPostsRequestAction> => async (dispatch) => {
  try {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts`).then((res) => {
      return res.data
    })
    dispatch({ type: GET_POSTS, payload: response })
  } catch (error) {
    console.log(error)
  }
}

export const sendPost = (post): ThunkAction<Promise<void>, RootState, undefined, GetPostsRequestAction> => async (
  dispatch
) => {
  console.log(post)
  try {
    const request = await axios({
      method: "POST",
      url: `https://simple-blog-api.crew.red/posts`,
      data: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.data)

    getPosts()
  } catch (error) {
    console.log(error)
  }
}

export const editPost = (post, id): ThunkAction<void, RootState, undefined, EditPostRequestAction> => async (
  dispatch
) => {
  console.log(post, id)
  try {
    const response = await axios({
      method: "PUT",
      url: `https://simple-blog-api.crew.red/posts/${id}`,
      data: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      return res.data
    })
    dispatch({ type: EDIT_POSTS, payload: response })
  } catch (error) {
    console.log(error)
  }
}

export const clearPosts = () => ({ type: "CLEAR_POSTS", payload: null })
