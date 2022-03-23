const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gj4567:1q2w3e4r@boilerplate.h1ffe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://gj4567:1q2w3e4r!@@boilerplate.h1ffe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})