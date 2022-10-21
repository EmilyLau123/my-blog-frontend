import { Card, Button, Grid, Stack, styled, TextField, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fromFieldsType } from '../../utils/type/formFieldType';
import CustomFormContent from './CustomFormContent';
import CustomTextField from './formFields.tsx/CustomTextField';

const CustomFormContainer = styled(Card)(({ theme }) => ({
  minHeight: '100%',
  width: '100%',
  border: '1px dashed',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '2',
  boxSizing: 'border-box'
}));

const CustomForm = ({ title, formFields }: { title: string; formFields: fromFieldsType[] }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const navigate = useNavigate();

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography variant='h4'>{title}</Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {formFields.map((field: fromFieldsType) => (
              <Grid item xs={12} key={field.value}>
                <CustomFormContent formField={field} control={control} />
              </Grid>
            ))}
            <Grid item xs={6} key='category-create-btn'>
              <Button
                type='submit'
                sx={{ justifyContent: 'center', width: '100%' }}
                variant='contained'
              >
                Create
              </Button>
            </Grid>
            <Grid item xs={6} key='category-cancel-btn'>
              <Button
                sx={{ justifyContent: 'center', width: '100%' }}
                variant='outlined'
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Card>
  );
};

export default CustomForm;
