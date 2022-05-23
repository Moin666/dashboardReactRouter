import React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";

function RunningServices({data,running,numberShow, Services, width}) {
    return (
        <Paper sx={{width:{width}, height:"250px"}}>
              <Typography variant ="h6" align ="left" padding={2}>{data}</Typography>
              <Typography variant ="subtitle1" align ="left" padding={2}>{numberShow}</Typography>
             <Typography variant ="subtitle1" align ="left" padding={2}>{running} <br/> Services</Typography>
          </Paper>
    );
}

export default RunningServices;