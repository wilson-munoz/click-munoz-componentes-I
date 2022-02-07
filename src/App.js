import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Ofertas de la semana"/>
    </>
  )
}

export default App;