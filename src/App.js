import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="store-header">
        <NavBar />
        <ItemListContainer greeting={"¡Bienvenido/a!"}/>
      </header>
    </div>
  );
}

export default App;
