import "./App.css";
import Footer from "./Components/Footer";
import Allroutes from "./Pages/Allroutes";
import ScrollButton from "./Pages/Product/AutoScrollTop";


function App() {
  return (
    <div className="App">
     <Allroutes/>
     <Footer/>
     <ScrollButton/>
    </div>
  );
}

export default App;
