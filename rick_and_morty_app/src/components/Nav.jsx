import React from 'react'
import SearchBar from './SearchBar.jsx';
import styles from "./button.module.css"
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const BarContainer = styled.div`
background-color: #313a5f;
display: flex;
justify-content: space-evenly;


`


export default function NavBar(props) {
  const {onSearch} = props

  function addRandomChar(){
    const randId = Math.floor(Math.random() * (827 - 1) + 1)
    onSearch(randId)
  }



  return (
    <BarContainer> 
      <Link to={"/about"} className={styles.button}>About</Link>
      <Link to={"/home"} className={styles.button}>Home</Link>
      <button className={styles.button} onClick={addRandomChar}>Random</button>
      <SearchBar onSearch = {onSearch} ></SearchBar>
    </BarContainer>
  )
}
