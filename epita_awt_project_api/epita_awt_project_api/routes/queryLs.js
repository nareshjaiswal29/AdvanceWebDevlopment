const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'info@12345',
    port: 5432,
})

const createUser = (request, response) => {
    const { username, pasword, name, birthdate, gender, email, country, area, street, city, number} = request.body
  
    pool.query('INSERT INTO public."Users"(username, pasword) VALUES ($1, $2)', [username, pasword], (error, results) => {
      if (error) {
        throw error
      }
    })
    pool.query('INSERT INTO public."Contact"(userid, name, birthdate, gender, email) VALUES ($1, $2,$3, $4, $5)', [username, name, birthdate, gender, email ], (error, results) => {
        if (error) {
          throw error
        }
      })
    pool.query('INSERT INTO public."Address"(userid, country, area, street, city, number) VALUES ($1, $2, $3, $4, $5, $6)', [username, country, area, street, city, number], (error, results) => {
        if (error) {
          throw error
        }
       response.status(201).send(`User added`)
      })
  }

  const getUserById = (request, response) => {
    const { username, pasword } = request.body
  
    pool.query('SELECT username, pasword FROM public."Users" WHERE username = $1 and pasword = $2', [username, pasword], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUser = (request, response) => {
    response.status(200).json({
        "message": "Hello world news!"
    });
  }


  module.exports = {
    getUserById,
    createUser,
    getUser
  }