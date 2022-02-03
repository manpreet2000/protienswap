import { Box, Input, Typography } from "@mui/material";
import React from "react";

const Swap = () => {
  const swapWrapper = {
    alignSelf: "center",
    backgroundColor: "primary.main",
    margin: "15% auto",
    minWidth: "50%",
    display: "flex",
    padding: "20px",
    borderRadius:"12px"
  };
  const swapInput = { 
    backgroundColor: "success.main",
   margin: "10px 0",
   borderRadius:"12px",
   outline:"none",
   padding:"20px",
   '&:before':{
     border:"none",
     position:"relative",
     content:"none"
   },
   '&:after':{
     border:"none"
   },
  };
  return (
    <Box sx={{ ...swapWrapper, flexDirection: "column" }}>
      <Typography sx={{ color: "success.main", fontWeight: "bold" }}>
        Swap
      </Typography>
      <Input sx={swapInput} />
      <Input sx={swapInput} />
    </Box>
  );
};

export default Swap;
