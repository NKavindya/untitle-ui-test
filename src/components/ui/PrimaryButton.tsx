import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type PrimaryButtonProps = ButtonProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  return <Button color="primary" variant="contained" {...props} />;
}





