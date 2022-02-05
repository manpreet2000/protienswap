import { Box } from '@mui/material';
import { useContext } from 'react';
import { CURRENTMODAL, SwapContext } from '../../context/SwapContext';
import React from 'react';

const LiquidityHeader:React.FC = () => {
  const styles = {
    color: 'background.paper',
    padding: '0 10px 0 10px',
    marginLeft: '5px',
    marginRight: '5px',
    alignSelf: 'center',
    backgroundColor: 'secondary.main',
    zoom: '1.3',
    borderRadius: '10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'primary.main'
    }
  };

  const { currentModal, changeCurrentModal } = useContext(SwapContext);
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'primary.main',
        padding: '0 20px 0 20px',
        marginTop: '1rem',
        borderRadius: '10px'
      }}
    >
      <Box
        sx={{
          ...styles,
          transform: currentModal === CURRENTMODAL.SWAP ? 'rotate(14deg)' : ''
        }}
        onClick={() => changeCurrentModal(CURRENTMODAL.SWAP)}
      >
        Swap
      </Box>
      <Box
        sx={{
          ...styles,
          transform: currentModal === CURRENTMODAL.POOL ? 'rotate(14deg)' : ''
        }}
        onClick={() => changeCurrentModal(CURRENTMODAL.POOL)}
      >
        Pool
      </Box>
    </Box>
  );
};

export default LiquidityHeader;
