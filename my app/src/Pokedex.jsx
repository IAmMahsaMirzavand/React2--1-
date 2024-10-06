import React from 'react';
import Pokecard from './Pokecard'; 




// function Pokedex(props) {
 
//   return (
//     <div className="pokedex">
//       <h1>Pokedex</h1>
//       <div className="row">
//         {props.pokemon.map((pokemon) => (
//           <Pokecard
//             key={pokemon.id} 
//             name={pokemon.name}
//             type={pokemon.type}
//             image={pokemon.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="row">
        {pokemon.map((pokemon) => (
          <Pokecard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}





export default Pokedex;
