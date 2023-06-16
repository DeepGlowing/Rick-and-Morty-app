import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

export default function Card({char,onClose}) {
   const {id,name,image} = char

   return (
      <CharCard>
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
