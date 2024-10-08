import Card from 'react-bootstrap/Card';

function MainCard({text,style,colors}) {
  return (
    <Card  className={`w-100 h-100   border-top-0 border-start-0 border-end-0 border-2 border-${colors}`}>
      <Card.Body className='  h-100 '>
        <Card.Text className=' w-100 h-100 text-center d-flex flex-column justify-content-around align-items-start 
        '>
          {style}
          {text}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default MainCard;