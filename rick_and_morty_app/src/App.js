import './App.css';
import { useEffect, useState } from "react";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios';

import { Routes, Route, useLocation } from 'react-router-dom';
import Details from './components/Views/View_Details';

const maxCharacters = 826 


function App() {
/*    const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   }; */

   const [characters, setCharacters] = useState([])   // Crea variable de estado "characters" con su set y la inicializa como array vacio
  

  function onSearch(idVal){
      /* const newChar = [...characters]
      newChar.push(example)
      setCharacters(newChar) */

      const currentChar = characters.filter((char) => char.id === Number(idVal))
      if (currentChar.length > 0) return alert('¡Ese personaje ya esta en pantalla!')
      // Verifica si ya hay un personaje dentro de la lista de personajes en pantalla


      if (Number(idVal) > 0 && Number(idVal) < (maxCharacters +1)){
         axios(`https://rickandmortyapi.com/api/character/${idVal}`).then(({ data }) => {
            if (data.name) {

               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });

      }else{window.alert('¡No hay personajes con este ID!');}
      
   }

   function onClose(idVal){ // <--- este metodo podria llamarse "deletCartById" ya que la App no responde a una accion "al cerrarce"/ "onClose", sino que esta eliminando una carta.
   // Actualiza la lista de characters cada que se cierra una carta.
   // Filtra de la lista la carta que llamo a esta funcion mediante la referencia de su id

      const updateChars = characters.filter((char) => char.id !== Number(idVal))
      setCharacters(updateChars)
   }

   const { pathname } = useLocation();
   console.log(useLocation())
   

   console.log(characters)
   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path='/' element={<div><h1>{">>>>>>>> INICIO <<<<<<<<"}</h1></div>}></Route>
            <Route path='/about' element={<div><h1>{">>>>>>>> ABOUT <<<<<<<<"}</h1></div>}></Route>
            <Route path='/detail/:id' element={<div><h1> <Details></Details> </h1></div>}></Route>
         </Routes>
          {pathname !== '/home' && pathname !== '/' && pathname !== '/about' && pathname !== '/detail/:id' ? <div><h1> 404 not found </h1></div> : null }
         
      </div>

   );
}


     
export default App;
