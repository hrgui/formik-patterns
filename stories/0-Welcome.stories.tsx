import React from 'react';
import {
  Form,
  TextField,
  SelectField,
  Option,
  RadioGroupField,
  RadioOption,
  SliderField,
  CheckboxField,
  SwitchField
} from '../src';
import { Button, MenuItem } from '@material-ui/core';

export default {
  title: 'Welcome',
};

export const toStorybook = () => (
  <Form
    initialValues={{
      firstName: 'Donald',
      lastName: 'Duck',
      age: 129,
      gender: 'm',
      blah: 50,
      dob:"1921-03-13",
      cool: ["test", "test3"],
      isCool: true
    }}
    onSubmit={v => alert(JSON.stringify(v))}
  >
    {({ values, handleSubmit }) => {
      return (
        <>
          <TextField
            fullWidth
            name="firstName"
            onChange={e => console.log(e)}
          />
          <TextField name="lastName" />
          <TextField type="number" name="age" />
          <TextField type="date" name="dob" />
          <SelectField name="gender">
            <Option value="m">Male</Option>
            <Option value="f">Female</Option>
          </SelectField>
          <RadioGroupField aria-label="gender" name="gender">
            <RadioOption value="f" label="Female" />
            <RadioOption value="m" label="Male" />
            <RadioOption value="other" label="Other" />
            <RadioOption value="disabled" disabled label="(Disabled option)" />
          </RadioGroupField>
          <SliderField name="blah" step={10} marks min={10} max={110} />
          <CheckboxField name="cool" value="test" />
          <CheckboxField name="cool" value="test2" />
          <SwitchField name="cool" value="test3" />
          <CheckboxField name="isCool" />
          {JSON.stringify(values)}
          <Button onClick={(e: any) => handleSubmit(e)}>Submit</Button>
        </>
      );
    }}
  </Form>
);

toStorybook.story = {
  name: 'to Storybook',
};
