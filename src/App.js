import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Shop} from './pages/shop/Prodavnica'
import {Cart} from './pages/cart/Korpa'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
    </div>
        );
}

export default App;
