import { Box } from "@mui/material";
import { MetamaskButton, AppLogo, LiquidityHeader } from "..";
const Header:React.FC =()=>{
    return(
        <Box sx={
            {
                padding: "1rem",
                display:"flex",
                justifyContent:"space-between",
                maxHeight:"5rem"
            }
        }>
        <AppLogo />
        <LiquidityHeader />
        <MetamaskButton />

        </Box>
    )
}

export default Header;