import "./App.css";
import { Route, Switch } from "wouter";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import MyAccount from "./pages/MyAccount";
import Newcalculator from "./pages/Newcalculator";
import Help from "./pages/Help";
import Login from "./pages/Login";
import DesignGuide from './pages/DesignGuide';
import DetailProduct from './pages/DetailProduct';
import ScrollToTop from './components/ScrollToTop';
import ResultImg from "./components/ResultImg";

const App = () => (
  <>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/allProducts" component={AllProducts} />
      <Route path="/myAccount" component={MyAccount} />
      <Route path="/myAccount/pedidos" component={MyAccount} />
      <Route path="/myAccount/cuenta" component={MyAccount} />
      <Route path="/myAccount/facturacion" component={MyAccount} />
      <Route path="/myAccount/pagos" component={MyAccount} />
      <Route path="/detailProduct" component={DetailProduct} />
      <Route path="/designGuide" component={DesignGuide} />
      <Route path="/calculator" component={Newcalculator} />
      <Route path="/Login" component={Login} />
      <Route path="/ayuda" component={Help} />
      <Route path="/test" component={ResultImg} />
      <Route><Error404 /></Route>
    </Switch>
  </>
);

export default App;
