import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Box, Typography } from '@mui/material';

const AppLogo: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <FitnessCenterIcon
        sx={{
          color: 'background.paper'
        }}
      />
      <Typography
        component="h1"
        sx={{
          color: 'primary.main',
          letterSpacing: '5px'
        }}
      >
        Protien Swap
      </Typography>
    </Box>
  );
};

export default AppLogo;
