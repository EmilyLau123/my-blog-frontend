import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import { MENU_ICON, HOME_ICON, ADD_CAT_ICON, ADD_TOPIC_ICON, ADD_POST_ICON } from '../theme/icons';

export default function MainAppBar({ toggleDrawer }: { toggleDrawer: any }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MENU_ICON />
          </IconButton>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='home'
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <HOME_ICON />
          </IconButton>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='create_cat'
            sx={{ mr: 2 }}
            onClick={() => navigate('/category/create')}
          >
            <ADD_CAT_ICON />
          </IconButton>
          <IconButton
            edge='end'
            color='inherit'
            aria-label='create_topic'
            sx={{ mr: 2, borderColor: 'black' }}
            onClick={() => navigate('/topic/create')}
          >
            <ADD_TOPIC_ICON />
            <Typography variant='subtitle1'>NEW TOPIC</Typography>
          </IconButton>
          <Button
            variant='outlined'
            sx={{ mr: 2, color: 'black', fontWeight: 10, borderColor: 'black' }}
            onClick={() => navigate('/post/create')}
            startIcon={<ADD_POST_ICON />}
          >
            <Typography variant='subtitle1'>NEW POST</Typography>
          </Button>
          {/* <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Button component={Link} to='setting' color='inherit' sx={{ justifySelf: 'center' }}>
            Setting
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
