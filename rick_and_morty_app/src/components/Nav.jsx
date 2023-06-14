import React from 'react'
import SearchBar from './SearchBar.jsx';

export default function NavBar(props) {
  const {onSearch} = props

  function addRandomChar(){
    const randId = Math.floor(Math.random() * (827 - 1) + 1)
    onSearch(randId)
  }



  return (
    <div className='NavBar'> 
    <button onClick={addRandomChar}>Random</button>
    <SearchBar onSearch = {onSearch} ></SearchBar>
    </div>
  )
}
