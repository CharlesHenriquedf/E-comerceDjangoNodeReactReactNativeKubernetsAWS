import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/products" exact component={ProductList} />
                    <Route path="/products/:productId" component={ProductDetail} />
                    <Route path="/login" component={UserLogin} />
                    <Route path="/register" component={UserRegister} />
                    <Route path="/cart" component={ShoppingCart} />
                    {/* Outras rotas conforme necessário */}
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
