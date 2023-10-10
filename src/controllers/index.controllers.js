const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  database: 'nodeFer',
  port: '5432'
});

const getUsers = async (req, res)=>{
  const response = await pool.query('SELECT * FROM persona');
  console.log(response.rows);
  res.json(response.rows);
};
  
const getUserByID = async (req, res) =>{
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM persona WHERE id = $1', [id]);
  res.json(response.rows);
}; 

const createUser = async (req, res)=>{
  const { nombre, apellido, profesion } = req.body;
  const response = await pool.query('INSERT INTO persona (nombre, apellido, profesion)VALUES($1, $2, $3)', [nombre, apellido, profesion]);
  console.log(req.body)
  res.json({
    message: 'User Added Succesfully',
    body: {
      user: {nombre, apellido, profesion}
    }
  })
};

const updateUser = async (req, res)=>{
  const id = req.params.id;
  const {nombre, apellido, profesion} = req.body;
  const response = await pool.query('UPDATE persona SET nombre = $1, apellido = $2, profesion = $3 WHERE id = $4', [nombre, apellido, profesion])
  console.log(response)
  res.send('User Updated');

}

const deleteUser = async (req, res)=>{
  const id = req.params.id;
  const response = await pool.query('DELETE FROM persona WHERE id = $1', [id]);
  console.log(response);
  res.json(`User ${id} Deleted successfully`)
}

module.exports = {
  getUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser
}