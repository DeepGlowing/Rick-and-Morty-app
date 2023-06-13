import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function onSearch(){
   window.alert('ejecuto la funcion onSearch')
}



function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={onSearch}/>
         <Cards characters={characters} />
         <Card
          char={Rick}
          onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}
//       
export default App;
