
import Header from "./componets/Header";
import { Service } from "./componets/Service";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Carsousle from "./componets/Carousle";

function App(){
  return(
    <> 
    <Header/>
   <Carsousle/>
 <div className="container">
  <div className="row text-center">
    <h1>flavours of cake</h1>
    <p>Cakes in India has not come out of our historical food and dishes but it is a western culture dessert <br /> that we have adopted. Cake flavour are always changing around the world with new innovative <br />ideas, with cake flavour, designs, decorations, season, shapes and textures. </p>

  </div>
  <div className="row ">
    <div className="col ">
      <Service/>
    </div>
    <div className="col">
      <Service/>
    </div>
    <div className="col">
      <Service/>
    </div>
  </div>
 </div>
 <Contact/>
 <Footer/>


</>

  )
}
export default App;