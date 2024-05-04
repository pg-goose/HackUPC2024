const { Console } = require('console');
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises; 

const app = express();

app.use(cors());

// Ruta al archivo cities.json
const citiesFilePath = path.join(__dirname, '..', 'static', 'cities.json');

app.get('/buscar-ciudad', async (req, res) => {
  const ciudad = req.query.ciudad;

  try {
    // Read the file using promises
    const data = await fs.readFile(citiesFilePath);
    
    const cities = JSON.parse(data);

    // Coger 10 ciudades que contengan la palabra ciudad
    const filteredCities = cities.filter((city) => {
      return city.toLowerCase().startsWith(ciudad.toLowerCase());
    }).slice(0, 10);

    res.json({cities: filteredCities});
    
  } catch (error) {
    console.error('Error reading or parsing cities data:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});