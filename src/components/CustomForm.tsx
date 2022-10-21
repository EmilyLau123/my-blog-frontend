import { Card, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const CustomForm = ({ title }: { title: string }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant='h5'>{title}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField fullWidth id='topic-label' label='Label name' />
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default CustomForm;
