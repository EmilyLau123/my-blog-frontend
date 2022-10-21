import { Box, Card, Paper, Typography } from '@mui/material';
import CustomForm from '../../components/form/CustomForm';
import {
  FORM_AUTOCOMPLETE,
  FORM_FILEUPLOAD,
  FORM_MULTITEXT,
  FORM_TEXT
} from '../../utils/constants';
import { fromFieldsType } from '../../utils/type/formFieldType';

const formFields: fromFieldsType[] = [
  {
    label: 'Category',
    value: 'category',
    type: FORM_AUTOCOMPLETE
  },
  {
    label: 'Topic',
    value: 'topic',
    type: FORM_AUTOCOMPLETE
  },
  {
    label: 'Title',
    value: 'title',
    type: FORM_TEXT
  },
  {
    label: 'Description',
    value: 'description',
    type: FORM_MULTITEXT
  },
  {
    label: 'Images',
    value: 'Images',
    type: FORM_FILEUPLOAD
  }
];

const PostForm = ({ title }: { title: string }) => {
  return <CustomForm title={title} formFields={formFields} />;
};

export default PostForm;
