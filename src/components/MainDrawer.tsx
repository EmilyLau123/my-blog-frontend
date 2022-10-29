import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
  Collapse,
  IconButton,
  ListSubheader,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { DRAWER_WIDTH } from '../utils/sizes';
import { MOCK_LISTITEM } from '../mock/listItems';
import { listItemType } from '../utils/type/listType';
import {
  ADD_CAT_ICON,
  ADD_POST_ICON,
  ADD_TOPIC_ICON,
  COLLAPSE_ICON,
  EXPAND_ICON,
  HOME_ICON,
  MENU_ICON,
  SETTINGS_ICON
} from '../theme/icons';
import { ThemeContext } from '@emotion/react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
  Link,
  useNavigate
} from 'react-router-dom';
import { MOCK_CATS } from '../mock/category';
import { categoryType } from '../utils/type/categoryType';
import { topicType } from '../utils/type/topicType';
import palette from '../theme/palette';

const MainDrawer = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: DRAWER_WIDTH,
          bgcolor: palette.primary.main,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box'
          }
        }
      }}
      anchor='left'
      // open={openDrawer}
      // onClose={() => toggleDrawer(false)}
      variant='permanent'
    >
      <Button
        component={Link}
        to='/'
        color='inherit'
        sx={{ justifySelf: 'center' }}
        startIcon={<HOME_ICON />}
      >
        {isDesktop && 'home'}
      </Button>
      <Button
        component={Link}
        to='/category/create'
        color='inherit'
        sx={{ justifySelf: 'center' }}
        startIcon={<ADD_CAT_ICON />}
      >
        {isDesktop && 'new category'}
      </Button>
      <Button
        component={Link}
        to='/topic/create'
        color='inherit'
        sx={{ justifySelf: 'center' }}
        startIcon={<ADD_TOPIC_ICON />}
      >
        {isDesktop && 'NEW TOPIC'}
      </Button>
      <Button
        component={Link}
        to='/post/create'
        color='inherit'
        sx={{ justifySelf: 'center' }}
        startIcon={<ADD_POST_ICON />}
      >
        {isDesktop && 'NEW POST'}
      </Button>
      {/* <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
      <Button
        component={Link}
        to='setting'
        color='inherit'
        sx={{ justifySelf: 'center' }}
        startIcon={<SETTINGS_ICON />}
      >
        {isDesktop && 'Settings'}
      </Button>
      {/* <CustomList onRedirect={toggleDrawer} /> */}
    </Drawer>
  );
};

export default MainDrawer;
