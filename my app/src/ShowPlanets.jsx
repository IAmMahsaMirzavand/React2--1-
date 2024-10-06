import React from 'react';




// function ShowPlanets({planets}) {
    
//     const planetsInHTML =planets.map((planet,index) =>(
//         <li key={index}>{planet}</li>
//     ) )
//     return (

// <>
// <ul className="list-group m-5">{planetsInHTML}</ul>
// </>

//     )
// }





function ShowPlanets({ planets }) { 
  return (
    <ul>
      {planets.map((planet) => ( 
        <li key={planet}>{planet}</li>
      ))}
    </ul>
  );
}

export default ShowPlanets;
