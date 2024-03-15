// @deno-types="npm:@types/express"
import express from "npm:express@4.18.3";

const app = express();
app.use(express.json())
const port = 3000

app.get('/pdf-creator', (req, res) => {
  res.send('Hello World!')
})

app.post('/pdf-creator', (req, res) => {
  const { name } = req.body
  res.send(`Hello ${name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})