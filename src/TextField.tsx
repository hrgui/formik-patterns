import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import {BaseField, BaseFieldProps} from './BaseField';

export function TextField(props: BaseFieldProps) {
  return <BaseField component={MuiTextField} {...props} />
}
