import Card from './Card';

export default function Cards(props) {
   const character = props.characters
   const onClose = props.onClose 

   return <div>
      {  character?.map((character,index) => {
         return <Card
          key = {character.id}
          char={character}
          onClose={onClose}
         />
      })}
      
   </div>;
}
