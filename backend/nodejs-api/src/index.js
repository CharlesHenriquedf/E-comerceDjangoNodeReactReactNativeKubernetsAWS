const express = require('express');
const mongoose = require('mongoose');

// Configuração do servidor Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexão com MongoDB
const MONGO_URI = 'mongodb://root:root@mongodb:27017/nomeDoBanco?authSource=admin';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Não foi possível conectar ao MongoDB', err));

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API Node.js funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
