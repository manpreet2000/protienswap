import React from "react";
import { FilledInput, Input, Select, styled, TextField } from "@mui/material";

const InputNumber = styled(Input)(() => ({}));

export const Box = () => {
  return (
    <div>
      <FilledInput
        placeholder="0.0"
        autoFocus={true}
        color="secondary"
        type="number"
        disableUnderline
      />
      <Select color="secondary" variant="filled" />
    </div>
  );
};
