

import Calculadora from '../components/Calculadora';


import Materiales from '../components/Materiales';
import Tabla3d from '../components/Tabla3d';
import BannerPasos from '../components/BannerPasos';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MaterialTable from '../components/MaterialTable';
// import FlipCards from '../components/FlipCards';



export default function Newcalculator() {
  return (
    <div className='bg-background'>
        <Header/>
    <BannerPasos/>
    <Calculadora/>
    <Materiales/>
    {/* <MaterialTable/> */}
    {/* <FlipCards/> */}
    <Tabla3d/>
    <Footer/>
    </div>
  )
}
