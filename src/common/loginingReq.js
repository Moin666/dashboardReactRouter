import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function LoginingReq({data,running,numberShow, Services, width}) {
    return (
        <Paper sx={{width:{width}, height:"100%", borderRadius:"10px"}}  elevation={4}>
              <Typography variant ="h6" align ="left" padding={2}>Logging Comments</Typography>
              <Typography variant ="body1" sx={{lineHeight: "1px"}} align ="left" padding={2}>3</Typography>
             <Typography variant ="subtitle2"  sx={{lineHeight: "1px"}} align ="left" padding={2}>running </Typography>
             <Typography variant ="subtitle2"  sx={{lineHeight: "5px"}} align ="left" padding={2}>running </Typography> 
          </Paper>
    );
}
export default LoginingReq;
