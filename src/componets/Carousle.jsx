
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Carsousle =()=>{
  return(
    <>
<Carousel>
      <Carousel.Item>
      <img className="img-fluid"
      src="https://plus.unsplash.com/premium_photo-1705433052895-752216a6a0f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <Carousel.Caption>
          <h3> Meringue Ice Cream Cake with Summer Berries</h3>
          <p>Strawberry Flavour cake one of the best and most loved trending fruit cakes in India. Strawberry Flavour known for its bright pink colour and delicious sweetness and rich strawberry fruit flavour.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid"
         src="https://images.unsplash.com/photo-1604413191066-4dd20bedf486?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       
        <Carousel.Caption>
          <h3>Mint Chip Ice Cream Cake</h3>
          <p>eady know that dark red colour is a symbol of expressing love towards one’s loved ones. You can’t miss an opportunity to make a special day with your loved one more special?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid"
         src="https://plus.unsplash.com/premium_photo-1716540164265-4c78792c6f32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <Carousel.Caption>
          <h3>Red, White & Blue Ice Cream Cake</h3>
          <p>
          Lemon-flavoured cakes are a delicious and refreshing treat that is perfect for those who love lemon. The cake batter is combined with lemon juice creates a bright and tangy flavour. The lemon flavour cake is further enhanced with a lemon icing that makes this cake a perfect treat for anyone
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default Carsousle;