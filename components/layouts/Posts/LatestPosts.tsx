import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { Post } from "../../../store/actions/posts_action"

export const PostStyled = styled.div`
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0 10px;
  color: black;
  max-height: 590px;
  width: 600px;
  background: rgba(255, 255, 255, 0.809);
  text-align: center;
  overflow: hidden;
  font-size: 1.3rem;
  &:hover {
    background: #ffffff96;
  }
`

interface Props {
  posts: {
    posts: Post[]
  }
}

const LatestPosts: React.FC<Props> = (props) => {
  const { posts } = props.posts
  const loadPosts = () => {
    return posts
      ? posts.map((post, i) => {
          const heightForImage = Math.floor(Math.random() * Math.floor(50))
          return (
            <div className="post_wrapper" key={post.id}>
              <PostStyled>
                <div className="image">
                  <Link href={{ pathname: "/posts", query: { postId: post.id } }} as={`/posts/${post.id}`}>
                    <a>
                      <img src={`https://picsum.photos/600/${400 + heightForImage}`} alt="post" />
                    </a>
                  </Link>
                </div>
                <div className="info">
                  <div className="title">{post.title}</div>
                  <div className="description">{post.body.length > 40 ? post.body.slice(0, 40) : post.body}</div>
                </div>
              </PostStyled>
            </div>
          )
        })
      : null
  }
  return <div className="posts">{loadPosts()}</div>
}

export default LatestPosts
