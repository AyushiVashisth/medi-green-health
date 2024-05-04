import "./App.css";
import Allroutes from "./Routes/Allroutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Allroutes />
    </div>
  );
}

export default App;
