import React from "react";
import InsertList from "../component/list";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../component/navbar";
import EnvServices from "../component/envService"
import { borderRadius, padding } from "@mui/system";


const Item = styled("div")(({ theme }) => ({
  // backgroundColor:"red"
}));

function Dashboard(props) {
  return (
    <div className="p-3 rounded"  >
      <Stack
        direction="row"
        justifyContent="space-bewteen"
        className="bg-white rounded"
        spacing={2}

      >
        <Item
          sx={{
            width: "450px",
            backgroundColor:"#181F1C",
            borderRadius:"10px",
            display: { xs: "none", sm: "block" },
          
          }}
        >
          <InsertList />
        </Item>
        <Item
          sx={{
            width: "100%",
            backgroundColor:"#65B1CD",
            padding:"10px",
            borderRadius:"10px"
          }}

        >
          <ResponsiveAppBar />

          <EnvServices/>
        
          
        </Item>
      </Stack>
    </div>
  );
}

export default Dashboard;
