import { Box, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DRAWER_WIDTH } from '../utils/sizes';
import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';

const MainLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (status: boolean) => {
    setOpenDrawer(status);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <MainAppBar toggleDrawer={toggleDrawer} /> */}
      <MainDrawer />
      <Box
        component='main'
        sx={{ width: `calc(100% - ${DRAWER_WIDTH})`, ml: `${DRAWER_WIDTH}`, p: 5 }}
      >
        {/* sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} */}
        {/* sx={{ ml: 15, mr: 15, mt: 5, mb: 5, p: 2 }}> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
