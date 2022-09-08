import { useField, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const InputPhone = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <>
      <PhoneInput
        {...props}
        {...field}
        value={field.value}
        id="number"
        defaultCountry="ua"
        preferredCountries={['ua']}
        autoFormat={true}
        onChange={value => {
          helpers.setValue(value);
        }}
        containerStyle={{
          marginBottom: '15px',
          width: '300px',
          marginTop: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        inputStyle={{
          outline: '1px solid #e99797',
          borderRadius: '5px',
          backgroundColor: '#cec1df2e',
          color: '#e99797',
          width: '300px',
          height: '20px',
        }}
      />
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </>
  );
};
