import {
  ListItemButton,
  ListItemText,
  Collapse,
  List,
  ListItemIcon,
  ListSubheader,
  Divider,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_CATS } from '../mock/category';
import { COLLAPSE_ICON, EXPAND_ICON } from '../theme/icons';
import { categoryType } from '../utils/type/categoryType';
import { topicType } from '../utils/type/topicType';

const ListSubItem = ({ item }: { item: categoryType }) => {
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
                to={`category/${item.value}/topic/${listItem.value}/post/list`}
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

const CustomAccList = ({ data }: { data: any[] }) => {
  return (
    <Box>
      {/* <Typography variant='h4'>Categories</Typography> */}
      <List
        sx={{ width: '100%', height: '100%', minWidth: 360 }}
        // component='nav'
        aria-labelledby='nested-list-subheader'
        // subheader={
        //   <ListSubheader component='div' id='nested-list-subheader'>
        //     Categories
        //   </ListSubheader>
        // }
      >
        {/* <Divider /> */}
        {MOCK_CATS.map((item: categoryType) => (
          <>
            {item.topics ? (
              <ListSubItem item={item} />
            ) : (
              <ListItemButton
                key={item.value}
                component={Link}
                to={`category/${item.value}/topic/list`}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </>
        ))}
      </List>
    </Box>
  );
};

export default CustomAccList;
