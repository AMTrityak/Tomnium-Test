import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './redux/create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Registration from './containers/Registration/Registration';
import AllProducts from './containers/AllProducts/AllProducts';
import ProductById from './containers/ProductById/ProductById';
import CreateProduct from './containers/CreateProduct/CreateProduct';
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/registration' component={Registration}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/product/new' component={CreateProduct}/>
                <Route exact path='/products' component={AllProducts}/>
                <Route exact path='/product/:id' component={ProductById}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);



serviceWorker.unregister();
