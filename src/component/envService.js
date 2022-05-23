import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Setting from "../common/setting";

import RunningServices from "../common/runningServier";
import LoginingReq from "../common/loginingReq";
import { Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function EnvServices(props) {
  return (
    <div>
      <div>
        <Typography variant="h4" align="start" padding={2}>
          Dev Enviroment Services
        </Typography>
        <Typography variant="h6" align="start" padding={2}>
          Dev Enviroment Services
        </Typography>
      </div>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={8}>
            <Setting />
          </Grid>
          <Grid
            item
            sm={4}
            xs={1}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Grid container>
              <Grid item xs={12} padding={1} height="23vh">
                <LoginingReq
                  data="Setting"
                  width="80%"
                  running="Running"
                  Services="Services"
                  numberShow="2"
                />
              </Grid>

              <Grid item sm={12} padding={1} height="23vh">
                <LoginingReq
                  data="Setting"
                  width="80%"
                  running="Running"
                  Services="Services"
                  numberShow="2"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={1} padding={2}>
          <LoginingReq
            data="Setting"
            width="20%"
            running="Running"
            Services="Services"
            numberShow="2"
          />
          <LoginingReq
            data="Setting"
            width="20%"
            running="Running"
            Services="Services"
            numberShow="2"
          />
          <LoginingReq
            data="Setting"
            width="20%"
            running="Running"
            Services="Services"
            numberShow="2"
          />
                  <LoginingReq
            data="Setting"
            width="20%"
            running="Running"
            Services="Services"
            numberShow="2"
          />
                  <LoginingReq
            data="Setting"
            width="20%"
            running="Running"
            Services="Services"
            numberShow="2"
          />
        </Stack>
      </Box>
    </div>
  );
}

export default EnvServices;
