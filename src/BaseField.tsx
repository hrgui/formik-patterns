import React from 'react';
import { FastField, FastFieldAttributes, getIn, isFunction } from 'formik';

function augmentCall(args: any[], call1: any, call2: any) {
  call1 && call1(...args);
  call2 && call2(...args);
}

export interface BaseFieldProps extends FastFieldAttributes<any> {}

export function BaseField(props: BaseFieldProps) {
  const { component, children, onChange, onBlur, ...otherProps } = props;

  return (
    <FastField {...otherProps}>
      {({ field, form }: { field: any; form: any }) => {
        const { isSubmitting, touched, errors } = form;
        const fieldError = getIn(errors, field.name);
        const showError = getIn(touched, field.name) && !!fieldError;
        const myProps = {
          ...field,
          id: field.name,
          ...otherProps,
          children,
          error: showError,
          onChange: (...args: any[]) =>
            augmentCall([...args], field.onChange, onChange),
          disabled: props.disabled ?? isSubmitting,
          onBlur: (...args: any[]) =>
            augmentCall([...args], field.onBlur, onBlur),
        };

        if (isFunction(children)) {
          return children({ field, form, props: myProps });
        }
        return React.createElement(component, myProps);
      }}
    </FastField>
  );
}
