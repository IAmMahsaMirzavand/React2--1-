import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alert from './Alert'
import Card from './Card'
import RenderList from './RenderList'

import Pokedex from './Pokedex'
import Pokecard from './Pokecard'
import './App.css'
import './index.css'
import CustomerInformation from './CustomerInformation'
import ShowPlanets from './ShowPlanets'



const data = {
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/220px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg',
  cardTitle: 'Bob Dylan',
  cardDescription:
    'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  button: {
    url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    label: 'Go to wikipedia',
  },
  
}



const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];




 const pokemon = [
  {
    id: 1,
    name: "Charmander",
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 2,
    name: "Squirtle",
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 3,
    name: "Butterfree",
    type: "flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 4,
    name: "Rattata",
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 5,
    name: "Metapod",
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
];


//// uncomment import react-bootstrap when render component Pokedex

function App() {
  

return (
<>
  <Card {...data}/>
  
  {/* <Alert text='OMG! Something really bad has happened!'/> */}
  {/* <RenderList /> */}
  {/* <ShowPlanets planets={planets}/> */}
      {/* <Pokedex  pokemon={pokemon} /> */}
   {/* <CustomerInformation /> */}
  </>

)

}


// function App() {

//   return (
//     <>
//       {data.image ? (
//         <Card {...data}/>
//       ) : (
//         <Alert text="OMG! Something really bad has happened!"/>
//       )} 
//     </>
//   );
// }



export default App
