const express = require('express');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use(errorHandler);

module.exports = app;
