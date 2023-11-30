const dotenv = require('dotenv');

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/meuBanco',
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRET_KEY || 'minhaChaveSecreta'
};
