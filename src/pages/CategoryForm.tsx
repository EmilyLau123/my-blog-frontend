import { Box, Card, Paper, Typography } from '@mui/material';
import CustomForm from '../components/form/CustomForm';
import { fromFieldsType } from '../utils/type/formFieldType';

const formFields: fromFieldsType[] = [
  {
    label: 'Name',
    value: 'name',
    type: 'text'
  },
  {
    label: 'Code',
    value: 'value',
    type: 'text'
  }
];

const CategoryForm = ({ title }: { title: string }) => {
  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography variant='h4'>{title}</Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <CustomForm formFields={formFields} />
      </Box>
    </Card>
  );
};

export default CategoryForm;
