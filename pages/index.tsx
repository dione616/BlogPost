import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import LatestPosts from "../components/layouts/Posts/LatestPosts"
import { getPosts } from "../store/actions/posts_action"
import { RootState } from "../store/reducers"

const mapStateToProps = (state: RootState) => {
  return {
    posts: state.posts,
  }
}

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {}

const Home: React.FC<Props> = ({ posts, dispatch, ...props }) => {
  useEffect(() => {
    dispatch(getPosts())
    return () => {}
  }, [])

  return (
    <>
      <h1>Blog App</h1>
      <LatestPosts posts={posts} />
    </>
  )
}
/* on server posts new */

export default connector(Home)
