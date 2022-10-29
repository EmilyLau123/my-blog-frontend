import { Box, Card, Paper, Typography } from '@mui/material';
import CustomForm from '../../components/form/CustomForm';
import { FORM_AUTOCOMPLETE, FORM_TEXT } from '../../utils/constants';
import { fromFieldsType } from '../../utils/type/formFieldType';

const formFields: fromFieldsType[] = [
  {
    label: 'Category',
    value: 'category',
    type: FORM_AUTOCOMPLETE
  },
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

const TopicForm = ({ pageTitle }: { pageTitle: string }) => {
  return <CustomForm title={pageTitle} formFields={formFields} />;
};

export default TopicForm;
