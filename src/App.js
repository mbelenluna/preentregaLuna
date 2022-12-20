import './App.css';
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {


  
  return (
    <div className="App">
      <header className="store-header">
        <NavBar />
        <Greeting greeting={"Envío gratis en órdenes de compra mayores a $20.000"}/>
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
