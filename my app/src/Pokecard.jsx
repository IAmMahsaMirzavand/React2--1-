
import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';





function Pokecard({ pokemon }) {
  return (
    <Col md={4} sm={6}  className=" mb-5" >
      <Card >
        <Card.Img   variant="top" src={pokemon.image} alt={pokemon.name} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>Type: {pokemon.type}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}




// function Pokecard({ pokemon }) {
//   return (
//     <div className="Pokecard">
//       <img src={pokemon.image} alt={pokemon.name} />
//       <h3>{pokemon.name}</h3>
//       <p>Type: {pokemon.type}</p>
//     </div>
//   );
// }





export default Pokecard;
