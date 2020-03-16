import * as React from 'react';
import { Formik, FormikConfig, Form as FormikForm, FormikProps } from 'formik';

function createOnSubmitChain(
  onSubmit: (values: any, formikActions: any) => any,
  onSubmitSuccess: (res: any, values: any, formikActions: any) => any,
  onSubmitError: (e: any) => any
) {
  return async function(values: any, formikActions: any) {
    try {
      const res = await onSubmit(values, formikActions);
      onSubmitSuccess && onSubmitSuccess(res, values, formikActions);
    } catch (e) {
      onSubmitError && onSubmitError(e);
    }
  };
}

export interface FormProps {
  onSubmitSuccess?: (res: any, values: any, formikActions: any) => any;
  onSubmitError?: (e: any) => any;
  children: (props: FormikProps<any>) => React.ReactNode;
  formProps?: any;
}

/**
 * Wrapper around Formik's <Formik /> component.
 * Top level form state, not to be confused with the `<Form` element from formik.
 * Includes the Form element by default.
 * @param props
 */
export function Form(props: FormikConfig<any> & FormProps) {
  const {
    onSubmit = () => null,
    onSubmitSuccess = () => null,
    onSubmitError = () => null,
    children,
    formProps = {},
    ...otherProps
  } = props;

  const handleSubmit = createOnSubmitChain(
    onSubmit,
    onSubmitSuccess,
    onSubmitError
  );

  return (
    <Formik
      enableReinitialize={
        props.enableReinitialize !== undefined ? props.enableReinitialize : true
      }
      initialValues={props.initialValues || {}}
      onSubmit={handleSubmit}
      {...otherProps}
      children={(...args) => (
        <FormikForm {...formProps}>{children(...args)}</FormikForm>
      )}
    />
  );
}

export default Form;
