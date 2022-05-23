import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    // <Stack direction="column" justifyContent="center" alignItems="center">
    <Box bgcolor="#181F1C">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          width: "30%",
          height: "40vh",
          backgroundColor: "#65B1CD",
          margin: "auto",
          marginTop: "220px",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h2">Sign In</Typography>
        <TextField
          id="demo-helper-text-aligned"
          label="Login"
          sx={{
            width: "300px",

            color: "primary",
          }}
        />
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Password"
          type="password"
          sx={{
            width: "300px",
          }}
        />

        <Link to={"/dashboard"}>
          <Button
            variant="contained"
            sx={{
              width: "300px",
            }}
          >
            {" "}
            Login
          </Button>
        </Link>

        <FormGroup sx={{ width: "300px" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="check me out"
          />
        </FormGroup>
      </Stack>
    </Box>
  );
}
