import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import AuthForm from './components/AuthForm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" render={() => <AuthForm isRegister={false} />} />
      <Route path="/register" render={() => <AuthForm isRegister={true} />} />
    </Switch>
  );
};

export default Routes;
