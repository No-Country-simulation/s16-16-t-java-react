import './App.css'
import {Route, Switch } from "wouter";
import Error404 from './pages/Error404';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Help from './pages/Help';
import MyAccount from './pages/MyAccount';

const App = () => (
  <>
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/allProducts' component={AllProducts}/>
      <Route path='/ayuda' component={Help}/>
      <Route path='/myAccount' component={MyAccount}/>
      <Route><Error404/></Route>
    </Switch>
  </>
)

export default App
