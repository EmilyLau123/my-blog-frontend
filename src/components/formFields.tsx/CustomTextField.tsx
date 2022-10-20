import { TextField } from '@mui/material';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

const CustomTextField = ({
  label,
  fieldProps
}: {
  label: string;
  fieldProps: ControllerRenderProps<FieldValues, string>;
}) => {
  return (
    <TextField
      id={`textField-${label}`}
      label={label}
      value={fieldProps.value}
      onChange={fieldProps.onChange}
      variant='outlined'
      fullWidth
    />
  );
};

export default CustomTextField;
