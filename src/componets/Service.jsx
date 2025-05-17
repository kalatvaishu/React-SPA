import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Service =()=>{
    return (
   <>
   <div className='card-body'>
   <Card style={{ width: '25rem'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Chocolate Cake</Card.Title>
        <Card.Text>
        Chocolate Cake. Chocolate cake is a timeless favorite for good reason: it's a flavor that most of us simply can't resist. Loved by kids and adults alike
        </Card.Text>
        <Button variant="danger">Select Option</Button>
      </Card.Body>
    </Card>
    </div>
   </>
    )
};
