import { Typography, Box, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const TopicList = () => {
  return (
    <Box>
      <Box sx={{ justifyContent: 'right', mb: 3 }}>
        <Button size='large' component={Link} to='/topic/create'>
          Add New Topic
        </Button>
      </Box>
      <Paper>
        <Typography>EG</Typography>
      </Paper>
    </Box>
  );
};

export default TopicList;
