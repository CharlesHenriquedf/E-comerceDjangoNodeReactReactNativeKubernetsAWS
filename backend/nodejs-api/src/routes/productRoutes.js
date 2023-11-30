const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');

router.route('/')
      .get(getProducts)
      .post(addProduct);

module.exports = router;

// Rotas para produtos
router.get('/api/products', productController.getAllProducts);
router.post('/api/products', productController.createProduct);
router.get('/api/products/:productId', productController.getProduct);
router.put('/api/products/:productId', productController.updateProduct);
router.delete('/api/products/:productId', productController.deleteProduct);

// Rotas para usuários
router.post('/api/users/register', userController.registerUser);
router.post('/api/users/login', userController.loginUser);
router.get('/api/users/:userId', userController.getUser);

// Rotas para pedidos
router.post('/api/orders', orderController.createOrder);
router.get('/api/orders/:orderId', orderController.getOrder);

module.exports = router;
