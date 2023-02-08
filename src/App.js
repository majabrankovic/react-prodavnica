import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Shop} from './pages/shop/Prodavnica'
import {Cart} from './pages/cart/Korpa'
import { ProizvodiContextProvider } from './context/ProizvodiContext';
import Footer from './components/footer';
import Kontakt from './pages/Kontakt';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProizvodiContextProvider>
              <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Shop />}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/kontakt"  element={<Kontakt />} />
              </Routes>
              <Footer/>
            </Router>
      </ProizvodiContextProvider>
    </div>
        );
}

export default App;
