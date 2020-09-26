const express = require("express")
const next = require("next")
const bodyParser = require("body-parser")

const dev = process.env.NODE_ENV !== "produciton"
const app = next({ dev })
//user get request handler from next
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    /* server.use(bodyParser.json()) */

    //
    server.get("/posts/:id", (req, res) => {
      const actualPage = "/posts"
      const queryParams = { postId: req.params.id }

      //rendering req that we get
      app.render(req, res, actualPage, queryParams)
    })

    server.get("/posts/new", (req, res) => {
      const actualPage = "/posts"

      const queryParams = { postId: req.params.id }

      //rendering req that we get
      app.render(req, res, actualPage, queryParams)
    })

    //tell next to handle all pages
    server.get("*", (req, res) => {
      return handle(req, res) //let next handle this req and res
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log(">ready on port 3000")
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
