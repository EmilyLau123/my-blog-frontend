import { Card, Box, Typography } from '@mui/material';
import { title } from 'process';
import { ReactElement } from 'react';

const FormCard = ({ formElement }: { formElement: ReactElement }) => {
  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography variant='h4'>{title}</Typography>
      </Box>
      <Box sx={{ p: 2 }}>{formElement}</Box>
    </Card>
  );
};

export default FormCard;
