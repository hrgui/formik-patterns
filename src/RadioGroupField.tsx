/*
<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
        */

import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { BaseField, BaseFieldProps } from './BaseField';

export function RadioGroupField(props: BaseFieldProps) {
  return <BaseField component={RadioGroup} {...props} />;
}

export const RadioOption = (props: any) => {
  const { radioProps = {} } = props;
  return <FormControlLabel control={<Radio {...radioProps} />} {...props} />;
};
