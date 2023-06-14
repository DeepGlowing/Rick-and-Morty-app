import { useState } from "react";


export default function SearchBar(props) {
   const {onSearch} = props

   const [id, setid] = useState("")


   function addChar(){
   /* Llama a la funcion onSearch la cual entra mediante 
   las propiedades del "props" y le asigna el id actual
   ingresado por input. Una vez enviado el id, se reestrablece a "" 
   */
      onSearch(id)
      setid("")
   }

   function handleChange (inputEvent){
   // Registra lo que se escribie dentro del input guardandolo en id

      setid(inputEvent.target.value)
   }


   return (
      <div>

         <input type="search" 
          onChange={handleChange}
          placeholder="Buscar PJ"
          value={id}
         ></input>

         <button onClick={addChar}>Agregar</button>
      </div>
   );
}
