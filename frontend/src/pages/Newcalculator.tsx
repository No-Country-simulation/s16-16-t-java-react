

import Calculadora from '../components/Calculadora';


import Materiales from '../components/Materiales';
import Tabla3d from '../components/Tabla3d';
import BannerPasos from '../components/BannerPasos';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Newcalculator() {
  return (
    <div>
        <Header/>
    <BannerPasos/>
    <Calculadora/>
    <Materiales/>
    <Tabla3d/>
    <Footer/>
    </div>
  )
}
