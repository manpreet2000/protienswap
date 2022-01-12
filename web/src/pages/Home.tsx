import React from "react";
import { Button } from "@mui/material";
import { useMetamask } from "../hooks/useMetamask";
import { EtherService } from "../services/etherService";
import { Box } from "../components/Box";
const Home: React.FC = () => {
  const { active, loading, metamaskConnect } = useMetamask();
  const account = EtherService.getInstance().userAccount;
  console.log({ active, loading, account });
  return (
    <>
      <Button onClick={metamaskConnect}>click me</Button>
      <Box />
    </>
  );
};

export default Home;
