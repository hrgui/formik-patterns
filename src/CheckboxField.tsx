import React from 'react';
import { Checkbox, Switch } from '@material-ui/core';
import { BaseField, BaseFieldProps } from './BaseField';
import {getIn} from 'formik';

function isChecked(value: any, actualValue: any) {
  if (Array.isArray(actualValue)) {
    return actualValue.indexOf(value) !== -1;
  }

  // true or false
  if (value === undefined) {
    return !!actualValue;
  }

  // might not be the case if type="checkbox"
  return value === actualValue;
}

export function CheckboxField(_props: BaseFieldProps) {
  const {component, ..._otherProps} = _props;
  const CheckboxComponent = _props.component || Checkbox;
  return (
    <BaseField
      type="checkbox"
      {..._otherProps}
    >
      {({ field, form }: { field: any; form: any; }) => {
        return (
          <CheckboxComponent
           checked={isChecked(_props.value, getIn(form.values, field.name))}
           {..._otherProps}
           {...field}
          />
        );
      }}
    </BaseField>
  );
}

export function SwitchField(_props: BaseFieldProps) {
  return <CheckboxField component={Switch} {..._props} />
}