require('dotenv').config()

const express   = require('express');
const morgan    = require('morgan');
const helmet    = require('helmet');
const mongoose  = require('mongoose');
const cors      = require('cors');
const {Client}   = require('pg')
const bodyParser = require('body-parser')
const UserDetails = require('./routes/queryLs')
const ratings = require('./routes/ratingRoute')
const moviesapi = require('./routes/movies')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
	useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB !');
});

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'AdvWebMovieProject',
//     password: 'info@12345',
//     port: 5432,
//     })
// client.connect()
// const db1 = client.connection;

// db1.on('error', console.error.bind(console, 'connection error:'));
// db1.once('open', function() {
//   console.log('Connected to Postgres !');
// });
const todoRoute = require('./routes/todoRoute')

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('./public'))

app.get('/usersId', UserDetails.getUser)
app.post('/users', UserDetails.createUser)
app.post('/usersDetails', UserDetails.getUserById)
app.use('/MovieRating', ratings);
app.get('/Movies', moviesapi.getMoviesList);
app.get('/Movies/:title', moviesapi.getMoviesByTitle);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur is listening on http://localhost:${port}`)
})