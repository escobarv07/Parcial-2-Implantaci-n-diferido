const express = require('express');
const { Pool } = require('pg'); // Cliente de PostgreSQL

const app = express();
const PORT = 3000;

// --- Configuración de la Base de Datos ---
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432, 
});

// --- Endpoint Ejercicio 1: Datos Personales ---
app.get('/', (req, res) => {
  res.json({
   
    nombreCompleto: "Héctor Leonardo Escobar Valle",
    expediente: "25812",
    codigoEstudiantil: "EV22-I04-001"
  });
});

// --- Endpoint Ejercicio 1: Health Check Básico ---
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// --- Endpoint Ejercicio 3: Verificación de Conexión a DB ---
app.get('/db-check', async (req, res) => {
  try {
    
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'Conexión exitosa',
      dbTime: result.rows[0].now,
    });
  } catch (error) {
    console.error('Error al conectar a la DB:', error);
    res.status(500).json({
      status: 'Error en la conexión a la DB',
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
  console.log('Variables de DB cargadas:');
  console.log(`- DB_HOST: ${process.env.DB_HOST}`);
  console.log(`- DB_USER: ${process.env.DB_USER}`);
  console.log(`- DB_NAME: ${process.env.DB_NAME}`);
});


