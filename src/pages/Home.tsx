import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
    <Box>
      <Paper sx={{ width: '60%', m: 10, p: 5 }}>
        <Typography variant='h4'>Welcome Back!</Typography>
      </Paper>
      <Paper>
        <CustomCarousel items={items} />
      </Paper>
    </Box>
  );
};

export default Home;
