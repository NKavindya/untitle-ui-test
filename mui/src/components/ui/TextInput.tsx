import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type TextInputProps = TextFieldProps;

export default function TextInput(props: TextInputProps) {
  return <TextField size="small" variant="outlined" fullWidth {...props} />;
}



