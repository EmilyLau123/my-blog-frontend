import { Paper, Card } from '@mui/material';
import { useEffect, useState } from 'react';
import CustomAccList from '../components/CustomAccList';
import CustomCarousel from '../components/CustomCarousel';
import useCategoryService from '../utils/hooks/useCategoryService';
import { categoryType } from '../utils/type/categoryType';

const Home = () => {
  const { getAllCategoryWTopic, getAllCategory } = useCategoryService();
  const [data, setData] = useState<categoryType[]>([]);
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

  useEffect(() => {
    getAllCategory().then((result) => {
      console.log(result.data);
      setData(result.data);
    });
  }, []);

  return (
    <Card>
      <CustomAccList data={data} />
      {/* <Typography variant='h4'>Welcome Back!</Typography>sx={{ width: '60%', m: 10, p: 5 }}
      </Paper>
      <Paper>
        <CustomCarousel items={items} /> */}
    </Card>
  );
};

export default Home;
