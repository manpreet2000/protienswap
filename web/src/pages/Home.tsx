import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Header, Swap } from '../components';
import { CURRENTMODAL, SwapContext } from '../context/SwapContext';
const Home: React.FC = () => {
  const swapStatus = useContext(SwapContext);
  return (
    <HomeWrapper>
      <Header />
      {swapStatus.currentModal===CURRENTMODAL.SWAP && <Swap />}
    </HomeWrapper>
  );
};
export default Home;

const HomeWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
});
