import React from 'react';
import { Select as MuiSelect, MenuItem, NativeSelect } from '@material-ui/core';
import { BaseField, BaseFieldProps } from './BaseField';

export function SelectField(props: BaseFieldProps) {
  return <BaseField component={MuiSelect} {...props} />;
}

export function NativeSelectField(props: BaseFieldProps) {
  return <BaseField component={NativeSelect} {...props} />;
}

export const Option = MenuItem;
