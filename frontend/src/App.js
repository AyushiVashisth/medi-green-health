import "./App.css";
import Footer from "./Components/Footer";
import Allroutes from "./Pages/Allroutes";
import Homepage from "./Pages/Homepage";
import Login from "./Components/Navbar/Login/Login";


function App() {
  return (
    <div className="App">

    <Allroutes/>
    {/* <Login/>
    <Homepage/>
      <Allroutes />     
      <Footer /> */}
    </div>
  );
}

export default App;
