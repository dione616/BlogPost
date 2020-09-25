import React, { useState } from "react"
import { Formik } from "formik"
import { sendPost } from "../../store/actions/posts_action"
import { useDispatch } from "react-redux"
import Router from "next/router"

const NewPost = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  const [done, setDone] = useState(false)
  const handleRules = (values) => {
    let errors = {}

    for (let prop in values) {
      if (!values[prop]) {
        errors[prop] = "Required"
      }
    }

    return errors
  }
  const handleSubmit = (values, actions) => {
    dispatch(sendPost(values)).then(() => {
      setDone(true)
      actions.setSubmitting(false)
      actions.resetForm()
      Router.push("/")
    })
  }
  return (
    <div>
      <div className="pos">
        <div className="form">
          {!done ? (
            <Formik
              initialValues={{ title: "", body: "" }}
              validate={(values) => handleRules(values)}
              onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
              {({ errors, values, handleSubmit, handleChange, isSubmitting, handleBlur, touched }) => (
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
                </form>
              )}
            </Formik>
          ) : (
            <div>Done!</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewPost
