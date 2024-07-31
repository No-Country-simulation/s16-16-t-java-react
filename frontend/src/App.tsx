import "./App.css";
import { Route, Switch } from "wouter";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import MyAccount from "./pages/MyAccount";
import Newcalculator from "./pages/Newcalculator";
import Help from "./pages/Help";
import DesignGuide from './pages/DesignGuide';
import Login from './pages/Login';
import Login2 from './pages/Login2';

import Shipment from './pages/Shipment';
import Payment from './pages/Payment';
import Resumen from './pages/Resumen';
import ResumenVarios from './pages/ResumenVarios';


import DetailProduct from './pages/DetailProduct';
import ScrollToTop from './components/ScrollToTop';
import ResultImg from "./components/ResultImg";

const App = () => (
  <>
    <ScrollToTop />
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/designGuide' component={DesignGuide}/>
      <Route path='/shipment' component={Shipment}/>
      <Route path='/payment' component={Payment}/>
      <Route path='/resumen' component={Resumen}/>
      <Route path='/resumenvarios' component={ResumenVarios}/>
      <Route path='/ayuda' component={Help}/>
      <Route path="/allProducts" component={AllProducts} />
      <Route path="/myAccount" component={MyAccount} />
      <Route path="/myAccount/pedidos" component={MyAccount} />
      <Route path="/myAccount/cuenta" component={MyAccount} />
      <Route path="/myAccount/facturacion" component={MyAccount} />
      <Route path="/myAccount/pagos" component={MyAccount} />
      <Route path="/detailProduct" component={DetailProduct} />
      <Route path="/calculator" component={Newcalculator} />
      <Route path="/Login" component={Login} />
      <Route path="/Logincheck" component={Login2} />

  
      <Route path="/test" component={ResultImg} />
      <Route><Error404 /></Route>
    </Switch>
  </>
);

export default App;
