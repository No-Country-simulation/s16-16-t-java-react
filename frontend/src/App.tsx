import './App.css'
import {Route, Switch } from "wouter";
import Error404 from './pages/Error404';
import Home from './pages/Home';

const App = () => (
  <>
    <Switch>
      <Route path='/' component={Home}/>
      <Route><Error404/></Route>
    </Switch>
  </>
)

export default App
