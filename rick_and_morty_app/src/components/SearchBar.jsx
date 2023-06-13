export default function SearchBar(props) {
   const {onSearch} = props

   return (
      <div>
         <input type="search" placeholder="Buscar PJ" ></input>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
