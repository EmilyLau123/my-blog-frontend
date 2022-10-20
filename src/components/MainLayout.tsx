import { Box } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';

const MainLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (status: boolean) => {
    setOpenDrawer(status);
  };
  return (
    <>
      <MainAppBar toggleDrawer={toggleDrawer} />
      <MainDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      <Box sx={{ ml: 15, mr: 15, mt: 5, mb: 5, p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
