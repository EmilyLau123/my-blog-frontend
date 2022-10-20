import { Control, Controller, FieldValues } from 'react-hook-form';
import { fromFieldsType } from '../../utils/type/formFieldType';
import CustomTextField from '../formFields.tsx/CustomTextField';

const CustomFormContent = ({
  formField,
  control
}: {
  formField: fromFieldsType;
  control: Control<FieldValues, any>;
}) => {
  switch (formField.type) {
    case 'multiText':
      return (
        <Controller
          name={formField.value}
          control={control}
          render={({ field }) => <CustomTextField fieldProps={field} label={formField.label} />}
        />
      );
    default:
      return (
        <Controller
          name={formField.value}
          control={control}
          render={({ field }) => <CustomTextField fieldProps={field} label={formField.label} />}
        />
      );
  }
};

export default CustomFormContent;
