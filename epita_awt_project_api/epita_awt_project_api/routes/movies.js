const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'info@12345',
    port: 5432,
})

const getMoviesList = (request, response) => {
    
    pool.query('SELECT * FROM public."Movies"', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getMoviesByTitle = (request, response) => {
    const title = request.params.title
  
    pool.query('SELECT title, plot, director, released, poster FROM public."Movies" WHERE title = $1', [title], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getMoviesList,
    getMoviesByTitle
  }