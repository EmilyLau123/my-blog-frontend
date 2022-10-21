import { TextField } from '@mui/material';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

const CustomTextField = ({
  label,
  fieldProps,
  rows
}: {
  label: string;
  fieldProps: ControllerRenderProps<FieldValues, string>;
  rows?: number;
}) => {
  return (
    <TextField
      id={`textField-${label}`}
      label={label}
      value={fieldProps.value}
      onChange={fieldProps.onChange}
      rows={rows ? 6 : 0}
      multiline={rows ? true : false}
      variant='outlined'
      fullWidth
    />
  );
};

export default CustomTextField;
