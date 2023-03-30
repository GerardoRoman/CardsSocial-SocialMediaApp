import './App.css';
import Cards from './cards.js'
import CardList from './cardList.js'
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Cards />
      <CardList />
    </>
  );
}

export default App;
