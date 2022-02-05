import { CustonButton } from '../../theme/uicomponents/CustomButton';
import { useMetamask } from '../../hooks/useMetamask';
import { useWeb3React } from '@web3-react/core';

const MetamaskButton: React.FC = () => {
  const metamask = useMetamask();
  const { account } = useWeb3React();
  return (
    <CustonButton
      text={
        account && metamask.active
          ? `${account.substring(0, 6)}...${account.substring(38)}`
          : 'Connect Metamask'
      }
      disabled={metamask.active}
      loading={metamask.loading}
      onClick={metamask.metamaskConnect}
    />
  );
};
export default MetamaskButton;
