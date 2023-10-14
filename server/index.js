const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const errorMiddleware = require("./middlewares/errors")

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CONNECT DATABASE
mongoose.connect(process.env.DATABASE , {useNewUrlParser: true})
.then(() => console.log('DB connected'))
.catch((err) => console.log(err));

const userRoute = require('./routes/user');
app.use('/api/user', userRoute);
app.use(errorMiddleware);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/api`);
});