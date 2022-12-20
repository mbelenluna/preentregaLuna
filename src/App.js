import './App.css';
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import List from './components/List';
import { products } from "./data.js";

function App() {
  
  return (
    <div className="App">
      <header className="store-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/maquillaje" element={<List list={"Maquillaje"} />} />
                <Route path="/cuidadodelcabello" element={<List list={"Cuidado del cabello"} />} />
                <Route path="/skincare" element={<List list={"Skincare"} />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
        
        <Greeting greeting={"Envío gratis en órdenes de compra mayores a $20.000"}/>
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
