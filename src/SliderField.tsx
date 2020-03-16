import React from 'react';
import { Slider } from '@material-ui/core';
import { BaseField, BaseFieldProps } from './BaseField';

export function SliderField(props: BaseFieldProps) {
  const { onChange, ...otherProps } = props;

  return (
    <BaseField {...otherProps}>
      {({ props, field, form }: { props: any; field: any; form: any }) => {
        return (
          <Slider
            {...props}
            onChange={(_, value) => {
              form.setFieldValue(field.name, value);
            }}
            onBlur={() => {
              form.setFieldTouched(field.name, true);
            }}
          />
        );
      }}
    </BaseField>
  );
}
