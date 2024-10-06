import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GalleryCard(props) {
const data = props.data
  return (
    <CardGroup>
      <Card className='gallery'>
      
  {data.map((data,index)=>(
<Card  className='gallery-item' key={index}>
<Card.Img variant="top" src={data.src} />
</Card>
  ))}
        
      
      </Card>
    </CardGroup>
  );
}

export default GalleryCard;