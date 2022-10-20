import { Button, Card, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

type homeNews = {
  name: string;
  description: string;
};

const CustomCarousel = ({ items }: { items: homeNews[] }) => {
  return (
    <Carousel sx={{ p: 5, m: 5 }} height='500px' swipe autoPlay>
      {items.map((item: homeNews, i: number) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item({ item }: { item: homeNews }) {
  return (
    <Card sx={{ p: 5, m: 5, height: '70%' }} variant='outlined'>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className='CheckButton'>Check it out!</Button>
    </Card>
  );
}

export default CustomCarousel;
