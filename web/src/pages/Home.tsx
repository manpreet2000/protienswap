import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Header,Swap } from "../components";
const Home: React.FC = () => {
  return (
    <HomeWrapper>
    <Header />
    <Swap />
    </HomeWrapper>
  );
};
export default Home;

const HomeWrapper = styled(Box)({
  display:"flex",
  flexDirection:"column",
  height:"100vh"
})
