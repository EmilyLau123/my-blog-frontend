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
import { Collapse, ListSubheader, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { DRAWER_WIDTH } from '../utils/sizes';
import { MOCK_LISTITEM } from '../mock/listItems';
import { listItemType } from '../utils/type/listType';
import { COLLAPSE_ICON, EXPAND_ICON } from '../theme/icons';
import { ThemeContext } from '@emotion/react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
  Link
} from 'react-router-dom';
import { MOCK_CATS } from '../mock/category';
import { categoryType } from '../utils/type/categoryType';
import { topicType } from '../utils/type/topicType';

const ListSubItem = ({
  item,
  onRedirect
}: {
  item: categoryType;
  onRedirect: (status: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={item.label} />
        {open ? <COLLAPSE_ICON /> : <EXPAND_ICON />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        {item.topics &&
          item.topics.map((listItem: topicType) => (
            <List component='div' disablePadding key={listItem.title}>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to={`${item.value}/${listItem.value}/list`}
                onClick={() => onRedirect(false)}
              >
                {listItem.icon && <ListItemIcon>{listItem.icon}</ListItemIcon>}
                <ListItemText primary={listItem.title} />
              </ListItemButton>
            </List>
          ))}
      </Collapse>
    </>
  );
};
// {`/${item.value}/${listItem.value}/list`}

const CustomList = ({ onRedirect }: { onRedirect: (status: boolean) => void }) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      // component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Hello!
        </ListSubheader>
      }
    >
      <Divider />
      {MOCK_CATS.map((item: categoryType) => (
        <>
          {item.topics ? (
            <ListSubItem item={item} onRedirect={onRedirect} />
          ) : (
            <ListItemButton
              key={item.value}
              component={Link}
              to={`${item.value}/list`}
              onClick={() => onRedirect(false)}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.label} />
            </ListItemButton>
          )}
        </>
      ))}
    </List>
  );
};

const MainDrawer = ({
  openDrawer,
  toggleDrawer
}: {
  openDrawer: boolean;
  toggleDrawer: (status: boolean) => void;
}) => {
  return (
    <Drawer
      PaperProps={{
        sx: {
          width: DRAWER_WIDTH
        }
      }}
      anchor='left'
      open={openDrawer}
      onClose={() => toggleDrawer(false)}
    >
      <CustomList onRedirect={toggleDrawer} />
    </Drawer>
  );
};

export default MainDrawer;
