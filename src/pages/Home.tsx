import { Paper, Card } from '@mui/material';
import CustomAccList from '../components/CustomAccList';
import CustomCarousel from '../components/CustomCarousel';

const Home = () => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!'
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!'
    }
  ];
  return (
    <Card>
      <CustomAccList />
      {/* <Typography variant='h4'>Welcome Back!</Typography>sx={{ width: '60%', m: 10, p: 5 }}
      </Paper>
      <Paper>
        <CustomCarousel items={items} /> */}
    </Card>
  );
};

export default Home;
