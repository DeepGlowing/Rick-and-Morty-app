import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { addFav,removeFav } from '../redux/actions';
import { connect } from 'react-redux';

const CharCard = styled.div`
background-color: #5630dd;
margin-top: 5px;
margin-bottom: 5px;
margin-left: 5px;
margin-right: 5px;
position: relative;
border-radius: 6px;
border-top-right-radius: 6px;
box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const CloseCardBut = styled.button`
background-color: #00ffff1f;
text-decoration: none;
border: solid #21176e 0px;
position: absolute;
margin-left: 279px;
border-top-right-radius: 6px;
&:hover {
    background-color: lightblue;
  }

`
const CharName = styled.h3`
font-size: larger;
width: 300px;
height: 0.5rem;
margin-top: 0;
color: #ffffff;

`
const ImgCard = styled.img`
border-top-left-radius: 6px;
border-top-right-radius: 6px;

`

function Card({char,onClose,addFav,removeFav,myFavorites}) {
   const {id,name,image} = char
   const [isFav,setIsFav] = useState(false)

   useEffect(() => {                     // Verifica si el personaje de la carta se encuentra entre los favoritos
      myFavorites.forEach((fav) => {     // Si es asi, seatea el estado local isFav en true. al hacerlo, aparecera con el corazon rojo.
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   function handleFavorite(){
      
      if(isFav){ setIsFav(false); removeFav(id) } // Si la carta esta en favoritos, cambia su estado local "isFav" a false y se elimina del store mediante su id
      else {setIsFav(true); addFav(char)}         // Si la carta no esta en favoritos, cambia su estado local "isFav" a true y se añade del store pasando toda la informacion del personaje
   }


   console.log(myFavorites)
   return (
      <CharCard>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
         <CloseCardBut onClick={() => onClose(id)}>X</CloseCardBut>
         <ImgCard src={image} alt={name} />
         <Link to={"/detail/"+id}>
            <CharName>{name}</CharName>
         </Link>
         
{/*          <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2> */}
         
      </CharCard>
   );
}


function mapState(state) {
   return {
      myFavorites: state.myFavorites,
   };
 }

export default connect(mapState,{addFav,removeFav})(Card)