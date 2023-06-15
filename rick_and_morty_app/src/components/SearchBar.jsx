import { useState } from "react";
import styles from "./button.module.css" // Importo modulo de estilo para botones

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
          placeholder="Buscar Personaje"
          value={id}
         ></input>

         <button className={styles.button} onClick={addChar}>Agregar</button>
      </div>
   );
}
