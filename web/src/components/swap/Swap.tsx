import { Box, Typography } from '@mui/material';
import { ArrowDropDownCircle } from '@mui/icons-material';
import DropdownInput from '../dropdownInput/DropdownInput';
import React from 'react';

const Swap:React.FC = () => {
  const swapWrapper = {
    alignSelf: 'center',
    backgroundColor: 'primary.main',
    margin: '15% auto',
    minWidth: '40%',
    display: 'flex',
    padding: '20px',
    borderRadius: '12px'
  };

  const arrowDownStyle = {
    alignSelf: 'center',
    zIndex: 2,
    margin: '-18px'
  };
  return (
    <Box sx={{ ...swapWrapper, flexDirection: 'column' }}>
      <Typography sx={{ color: 'success.main', fontWeight: 'bold' }}>
        Swap
      </Typography>
      <DropdownInput />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <ArrowDropDownCircle sx={arrowDownStyle} />
        <DropdownInput />
      </Box>
    </Box>
  );
};

export default Swap;
