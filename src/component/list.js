import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { CssBaseline, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Divider from "@mui/material/Divider";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SettingsIcon from "@mui/icons-material/Settings";
import { Theme } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Link from '@material-ui/core/Link';

export default function InsetList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "grey",
        color: "black",
        padding: "5px",
        color: "white",
      }}
      aria-label="contacts"
    >
      <ListItem
        alignItems="center"
        dense
        sx={{
          marginBottom: "10px",
          padding: "15px",
          "&:hover": {
            backgroundColor: "#1985A1",
          },
        }}
      >
        <ListItemButton>
          <ListItemText>
            <Typography variant="h5">Dev/Env</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem
        disablePadding
        sx={{
          "&:hover": {
            color: "black",
            backgroundColor: "#1985A1",
          },
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <ConfirmationNumberIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{
          "&:hover": {
            color: "black",
            backgroundColor: "#1985A1",
          },
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItemButton>
      </ListItem>

      <ListItem
        disablePadding
        sx={{
          "&:hover": {
            color: "black",
            backgroundColor: "#1985A1",
          },
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <MedicalServicesIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Manage" />
        </ListItemButton>
      </ListItem>

      <Link to={"/signUp"} style={{ textDecoration: 'none',color:"white" }}>
        <ListItem
          disablePadding
          sx={{
            "&:hover": {
              color: "black",
              backgroundColor: "#1985A1",
            },
          }}
          // component="Link"
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon to="/path" sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="SignOut" />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
}
