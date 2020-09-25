import Link from "next/link"
import React from "react"

const LatestPosts = (props) => {
  const { posts } = props.posts
  const loadPosts = () => {
    return posts
      ? posts.map((post, i) => {
          return (
            <div className="post_wrapper" key={post.id}>
              <div className="post">
                <Link href={{ pathname: "/posts", query: { postId: post.id } }} as={`/posts/${post.id}`}>
                  <a>
                    <img src={`https://picsum.photos/600/40${i}`} alt="post" />
                  </a>
                </Link>
                <div className="info">
                  <div className="title">{post.title}</div>
                  <div className="description">{post.body}</div>
                </div>
              </div>
            </div>
          )
        })
      : null
  }
  return <div className="posts">{loadPosts()}</div>
}

export default LatestPosts
