import React, { useState } from "react"
import axios from "axios"
import { Formik } from "formik"
import { useDispatch } from "react-redux"
import { editPost } from "../../store/actions/posts_action"
import Router from "next/router"

const Post = (props) => {
  let post = props.postData

  const [editable, setEditable] = useState(false)
  const [done, setDone] = useState(false)

  const dispatch = useDispatch()
  const handleRules = (values) => {
    let errors = {}

    for (let prop in values) {
      if (!values[prop]) {
        errors[prop] = "Required"
      }
    }

    return errors
  }

  const handleSubmit = (values, actions, id) => {
    console.log(values, actions)
    dispatch(editPost(values, id)).then(() => {
      setDone(true)
      actions.setSubmitting(false)
      actions.resetForm()
      Router.push("/")
    })
  }

  const editData = () => {
    setEditable(true)
  }
  const cancelEdit = () => {
    setEditable(false)
  }

  console.log(props)

  return (
    <>
      <div className="pos">
        <div className="post ">
          {!done ? (
            editable ? (
              <Formik
                initialValues={{ title: post.title, body: post.body }}
                validate={(values) => handleRules(values)}
                onSubmit={(values, actions) => handleSubmit(values, actions, post.id)}
              >
                {({ errors, values, handleSubmit, handleChange, isSubmitting, handleBlur, touched }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          placeholder="Enter Title"
                          value={values.title}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.title && touched.title ? <div className="error_label">{errors.title}</div> : null}
                      </div>

                      <div className="form-group">
                        <label>body</label>
                        <input
                          type="text"
                          className="form-control"
                          name="body"
                          placeholder="Enter bodyription"
                          value={values.body}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.body && touched.body ? <div className="error_label">{errors.body}</div> : null}
                      </div>

                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        Submit
                      </button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </form>
                  </>
                )}
              </Formik>
            ) : (
              <>
                <img src={`https://picsum.photos/700/500`} alt="post" />
                <div className="title">
                  <p>{post.title}</p>
                </div>
                <div className="description">
                  <p>{post.body}</p>
                </div>
              </>
            )
          ) : (
            <div>Done!</div>
          )}

          <button onClick={editData}>Edit</button>
        </div>
        <div></div>
      </div>
    </>
  )
}

Post.getInitialProps = async (props) => {
  let postData
  console.log(props)

  try {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${props.query.postId}`)
    postData = response.data
  } catch (error) {
    console.log(error)
  }

  return { postData }
}

export default Post
