import { ButtonProps} from "@mui/material";
import React from "react";
import {LoadingButton} from '@mui/lab';

interface CustomButtonProps extends ButtonProps {
    text: string;
    loading?: boolean;
}
export const CustonButton:React.FC<CustomButtonProps> = ({text,loading,sx, ...props}) =>{
       return(
        <LoadingButton 
        {...props}
        variant="contained"
        color="secondary"
        sx={{paddingLeft: "1.5rem",paddingRight:"1.5rem", ...sx}}
        loading={loading}
        >
        {text}    
        </LoadingButton>
    )
}