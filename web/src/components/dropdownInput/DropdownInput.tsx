import { Box, Button, Input, SxProps } from '@mui/material';
import React from 'react';

interface inputProps {
  buttonText: string;
  buttonStyle?: SxProps;
}

const DropdownInput: React.FC<inputProps> = ({ buttonText, buttonStyle }) => {
  const boxStyle: SxProps = {
    backgroundColor: 'success.main',
    margin: '10px 0',
    borderRadius: '12px',
    display: 'flex'
  };
  const swapInput: SxProps = {
    minWidth: '60%',
    margin: '10px 0',
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
  const buttonSxProps:SxProps={
    minWidth:"40%",
    background:"rgba(0,0,0,0.6)",
    margin:"25px",
    marginLeft:"-10px"
  }
  return (
    <Box sx={boxStyle}>
      <Input placeholder="0.0" sx={swapInput} />
      <Button sx={{ ...buttonSxProps,...buttonStyle }}>{buttonText} </Button>
    </Box>
  );
};

export default DropdownInput;
