import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SignUp(props) {
  return (
    <Stack justifyContent='center' alignItems="center" sx={{height:"100vh",border:"1px solid "}} spacing={2} >
      <Box  mb={2}>
        <Box width="60px" height ="45px" bgcolor="red"  sx={{borderRadius:"15px",textAlign:"ceter",verticalAlign:"center"}}>
          <LockIcon sx={{width:"100%", marginTop:"8px",color:"white"}}  />
        </Box>
      </Box>
      <Box width="20%" >
        <TextField sx={{width:"47%"}} label="First Name" color="secondary" focused />
        <TextField sx={{marginLeft:"18px",width:"47%"}} label="Last Name" color="secondary" focused />
      </Box>
      <Box width="20%">
        <TextField sx={{width:"100%"}} label="Email" color="secondary" focused />
      </Box>
      <Box width="20%">
        <TextField sx={{width:"100%"}} label="Password" type="password" color="secondary" focused />
      </Box>
      <Box width="20%">
        <FormControlLabel control={<Checkbox defaultChecked />} label="I want to recieve inspiration and marketing promotion and updates from" />
      </Box>
      <Box width ="20%">
          <Link to ={"/"}>
      <Button sx={{width:"100%"}} variant="contained">SignUP</Button>
          </Link>

      </Box>
      <Box >
        <Typography sx={{marginLeft:"220px"}}  component="a" variant="subtitle1" >Already have signIN</Typography>

      </Box>
    </Stack>
  );
}

export default SignUp;
