import React from 'react'
import Cards from '../Cards'
import { useSelector } from 'react-redux'

export default function View_Favorites() {

    const favs = useSelector((state)=>state.myFavorites)

  return (
    <div>
        <Cards characters ={favs} onClose={null}></Cards>
    </div>
  )
}

