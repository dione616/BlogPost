import { combineReducers } from "redux"
import { postsReducer } from "./posts_reducer.ts"

const rootReducer = combineReducers({
  posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
