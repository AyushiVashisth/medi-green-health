import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Pages/Allroutes';
import { BrandedDeals } from './Pages/Cart/scroller';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Allroutes/>
     <BrandedDeals/>
    </div>
  );
}

export default App;
