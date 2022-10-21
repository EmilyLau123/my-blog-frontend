import { Control, Controller, ControllerRenderProps, FieldValues } from 'react-hook-form';
import { FORM_AUTOCOMPLETE, FORM_FILEUPLOAD, FORM_MULTITEXT } from '../../utils/constants';
import { fromFieldsType } from '../../utils/type/formFieldType';
import CustomAutocomplete from './formFields.tsx/CustomAutocomplete';
import CustomTextEditor from './formFields.tsx/CustomTextEditor';
import CustomTextField from './formFields.tsx/CustomTextField';

const formRender = (
  field: ControllerRenderProps<FieldValues, string>,
  formField: fromFieldsType
) => {
  switch (formField.type) {
    case FORM_MULTITEXT:
      return <CustomTextEditor />;
    // fieldProps={field} label={formField.label} rows={6}
    case FORM_AUTOCOMPLETE:
      return <CustomAutocomplete fieldProps={field} label={formField.label} />;
    case FORM_FILEUPLOAD:
      return <CustomTextField fieldProps={field} label={formField.label} />;
    default:
      return <CustomTextField fieldProps={field} label={formField.label} />;
  }
};

const CustomFormContent = ({
  formField,
  control
}: {
  formField: fromFieldsType;
  control: Control<FieldValues, any>;
}) => {
  return (
    <Controller
      name={formField.value}
      control={control}
      render={({ field }) => {
        return formRender(field, formField);
      }}
    />
  );
};

export default CustomFormContent;
