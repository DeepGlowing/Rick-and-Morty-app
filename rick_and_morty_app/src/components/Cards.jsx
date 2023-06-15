import Card from './Card';
import styled from 'styled-components'

const CardsContainer = styled.div`

//background-color: #181863;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 0.99rem;

`





export default function Cards(props) {
   const character = props.characters
   const onClose = props.onClose 

   return <CardsContainer>
      {  character?.map((character,index) => {
         return <Card
          key = {character.id}
          char={character}
          onClose={onClose}
         />
      })}
      
   </CardsContainer>;
}
