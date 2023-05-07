import "./App.css";
import Footer from "./Components/Footer";
import Allroutes from "./Pages/Allroutes";
import Maped from "./Components/Caraousel/Maped";

function App() {
  return (
    <div className="App">
      <Allroutes />   
      <Maped/>  
      <Footer />
    </div>
  );
}

export default App;
