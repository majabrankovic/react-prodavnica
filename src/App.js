import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Shop} from './pages/shop/Prodavnica'
import {Cart} from './pages/cart/Korpa'
import ONama from './pages/ONama'
import { ProizvodiContextProvider } from './context/ProizvodiContext';
import Footer from './components/footer';
import Kontakt from './pages/Kontakt';
import CopyButton from "./components/CopyButton";
import './App.css';

function App() {

  const telefon = "+381 657890345";

  return (
    <div className="App">
      <ProizvodiContextProvider>
              <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Shop />}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/kontakt"  element={<Kontakt />} />
                <Route path="/onama"  element={<ONama />} />
              </Routes>
              <Footer />
              
                <CopyButton textToCopy={telefon}/> 
              
            </Router>
      </ProizvodiContextProvider>
    </div>
        );
}

export default App;
