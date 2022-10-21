import { TextField, Autocomplete } from '@mui/material';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { MOCK_CATS } from '../../../mock/category';

const CustomAutocomplete = ({
  label,
  fieldProps
}: {
  label: string;
  fieldProps: ControllerRenderProps<FieldValues, string>;
}) => {
  return (
    <Autocomplete
      options={MOCK_CATS}
      //isOptionEqualToValue={(option, value) => _.isEqual(option, value)}
      //getOptionLabel={fieldsData.getOptionLabel && fieldsData.getOptionLabel}
      filterSelectedOptions
      data-testid='test-AutoCompleteCustom'
      //renderOption={fieldsData.renderOption && fieldsData.renderOption}
      //   disabled={fieldsData.disable}
      clearOnBlur={false}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          //margin='normal'
          //   error={Boolean(error)}
          //   helperText={error?.message}
          //   disabled={fieldsData.disable}
          //   InputProps={{
          //     ...params.InputProps,
          //     endAdornment: (
          //       <>
          //         {value && fieldsData.getInputEndAdornment && fieldsData.getInputEndAdornment(value)}
          //         {params.InputProps.endAdornment}
          //       </>
          //     )
          //   }}
        />
      )}
      onChange={(_, data) => fieldProps.onChange(data)}
      value={fieldProps.value}
    />
  );
};

export default CustomAutocomplete;
