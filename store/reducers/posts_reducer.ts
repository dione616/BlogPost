import { GET_POSTS, GetPostsRequestAction, Post } from "../actions/posts_action"

interface PostState {
  posts: Post[]
}

let initialState = {
  posts: [],
}
export const postsReducer = (state: PostState = initialState, action: GetPostsRequestAction) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: action.payload }
    }
    default:
      return state
  }
}
