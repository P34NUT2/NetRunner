const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Servidor Express funcionando correctamente' });
});

// Ruta de prueba API
app.get('/api/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'API funcionando',
    timestamp: new Date()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
