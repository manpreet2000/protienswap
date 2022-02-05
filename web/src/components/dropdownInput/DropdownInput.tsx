import { Input } from '@mui/material';
import React from 'react';

const DropdownInput:React.FC = () => {
  const swapInput = {
    backgroundColor: 'success.main',
    margin: '10px 0',
    borderRadius: '12px',
    outline: 'none',
    padding: '20px',
    '&:before': {
      border: 'none',
      position: 'relative',
      content: 'none'
    },
    '&:after': {
      border: 'none'
    }
  };
  return (
    <>
      <Input sx={swapInput} />
    </>
  );
};

export default DropdownInput;
