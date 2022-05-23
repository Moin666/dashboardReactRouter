import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import RunningServices from "./runningServier";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"450px",
    height:"250px"
  }));

export default function Setting() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 428,
        },
      }}
    >
      <Paper elevation={4} sx={{borderRadius:"10px"}}>
        <Typography variant="h6" padding={2} align="left">
          Servier Status
        </Typography>
        <Typography variant="subtitle1" padding={2} align="left">
          Server Bravo 192.168.20.138
        </Typography>
        <Stack direction="row" spacing={2} padding ={2} justifyContent = "space-between" >

          <RunningServices data ='Setting' width ="30%" running = "Running" Services = "Services" numberShow ="2"/>
          <RunningServices data ='Setting' width ="30%" running = "Running" Services = "Services" numberShow ="2"/>
          <RunningServices data ='Setting' width ="50%" running = "Running" Services = "Services" numberShow ="2"/>
    
        </Stack>
      </Paper>
    </Box>
  );
}
