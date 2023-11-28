import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage;

function UncontrolledExample() {
  return (
    <Carousel style={{width:'100%',height:'400px',marginTop:'20px'}}>
      <Carousel.Item>
        <img style={{height:'400px'}} src='https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}} src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:'400px'}} src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80'></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;