import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { topicType } from '../utils/type/topicType';
import { postType } from '../utils/type/postType';
import { Topic } from '@mui/icons-material';
import { dataCardType } from '../utils/type/dataCradType';
import { Link } from 'react-router-dom';
import { LIST_POST_TITLE, VIEW_POST_TITLE } from '../utils/constants';

const DataCard = ({ type, data }: { type: string; data: dataCardType }) => {
  return (
    <Card sx={{ minWidth: 345 }}>
      {/* <CardMedia
        component='img'
        height='140'
        image='/static/images/cards/contemplative-reptile.jpg'
        alt='green iguana'
      /> */}
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        {type === LIST_POST_TITLE ? (
          <Button component={Link} to={`/post/${data.id}`}>
            View Post
          </Button>
        ) : (
          <>
            {type !== VIEW_POST_TITLE ? (
              <Button component={Link} to={`/topic/${data.id}`}>
                View Topic
              </Button>
            ) : (
              <></>
            )}
          </>
        )}
        {/* <Button size='small'>Learn More</Button> */}
      </CardActions>
    </Card>
  );
};
export default DataCard;
