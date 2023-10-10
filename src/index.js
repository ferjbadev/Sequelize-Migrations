const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

// Runing server
app.listen(port, ()=>{
  console.log(`Server running on port: ${port}`);
})