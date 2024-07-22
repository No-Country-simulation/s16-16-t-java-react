import './App.css'
import {Route, Switch } from "wouter";
import Error404 from './pages/Error404';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import MyAccount from './pages/MyAccount';
import Newcalculator from './pages/Newcalculator';
import Help from './pages/Help';
import DesignGuide from './pages/DesignGuide';

const App = () => (
  <>
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/allProducts' component={AllProducts}/>
      <Route path='/myAccount' component={MyAccount}/>
      <Route path='/designGuide' component={DesignGuide}/>
      <Route path='/calculator' component={Newcalculator}/>
      <Route path='/ayuda' component={Help}/>
      <Route><Error404/></Route>
    </Switch>
  </>
)

export default App