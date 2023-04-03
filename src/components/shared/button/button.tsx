import { Button as MuiButton } from "@mui/material";
import React from "react";
import { ButtonProps } from "./button.model";

export default function Button(props: ButtonProps) {
  return <MuiButton {...props}>{props?.label}</MuiButton>;
}
