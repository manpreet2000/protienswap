import { Box } from "@mui/material";

const LiquidityHeader = () => {
    const styles = {
        "color":"background.paper",
        "padding":"0 10px 0 10px",
        "marginLeft":"5px",
        "marginRight":"5px",
        "alignSelf":"center",
        "backgroundColor":"secondary.main",
        "zoom":"1.3",
        "borderRadius":"10px",
        "cursor":"pointer",
        "&:hover":{
            "backgroundColor":"primary.main"
        }
    }
  return(
      <Box
      sx={{
          display:"flex",
          backgroundColor:"primary.main",
          padding:"0 20px 0 20px",
          marginTop:"1rem",
        borderRadius:"10px"
      }}>
          <Box sx={styles}>Swap</Box>
          <Box sx={styles}>Pool</Box>
      </Box>
  );
};

export default LiquidityHeader;
