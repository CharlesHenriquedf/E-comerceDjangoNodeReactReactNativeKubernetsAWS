import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Products" component={ProductListScreen} />
                    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
                    <Stack.Screen name="Login" component={UserLoginScreen} />
                    <Stack.Screen name="Cart" component={ShoppingCartScreen} />
                    {/* Outras telas conforme necessário */}
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
