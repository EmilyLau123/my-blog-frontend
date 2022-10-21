import { Box, Card, Paper, Typography } from '@mui/material';
import CustomForm from '../../components/form/CustomForm';
import { FORM_TEXT } from '../../utils/constants';
import { fromFieldsType } from '../../utils/type/formFieldType';

const formFields: fromFieldsType[] = [
  {
    label: 'Name',
    value: 'name',
    type: FORM_TEXT
  },
  {
    label: 'Code',
    value: 'value',
    type: FORM_TEXT
  }
];

const CategoryForm = ({ title }: { title: string }) => {
  return <CustomForm title={title} formFields={formFields} />;
};

export default CategoryForm;
