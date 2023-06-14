export default function Card({char,onClose}) {
   const {id,name,gender,species,origin,image,status} = char

   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
