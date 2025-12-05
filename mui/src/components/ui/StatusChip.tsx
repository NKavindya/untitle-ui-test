import React from 'react';
import { Chip, ChipProps } from '@mui/material';

export type StatusVariant = 'success' | 'warning' | 'error' | 'default';

interface StatusChipProps extends Omit<ChipProps, 'color'> {
  status: StatusVariant;
}

export default function StatusChip({ status, ...rest }: StatusChipProps) {
  const color: ChipProps['color'] =
    status === 'success'
      ? 'success'
      : status === 'warning'
      ? 'warning'
      : status === 'error'
      ? 'error'
      : 'default';

  return <Chip size="small" color={color} variant="outlined" {...rest} />;
}



