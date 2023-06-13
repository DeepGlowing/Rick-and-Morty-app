import Card from './Card';

export default function Cards(props) {
   const character = props.characters
   return <div>
      {character.map(character => {
         return <Card
         char={character}
          onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      })}
      
   </div>;
}
