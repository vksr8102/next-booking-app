import { Button, Grid, styled, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const Video = styled("video")({
    height:"600px",
    objectFit:"cover",
    width:"100%"
})
const StyleToolbar = styled(Box)(({theme})=>({
position:"relative",
}))
const Content1 = () => {
  return (
    <StyleToolbar >
<Video src='https://player.vimeo.com/external/434850652.sd.mp4?s=3bd4b50ab61cc819e84c7442d3c9b9a2f840034c&profile_id=164&oauth2_token_id=57447761' autoPlay muted loop/>
<Box sx={{position:"absolute",bottom:"130px",right:"30px",padding:"20px 20px",color:"#FFFFFF",backgroundColor:"#000"}}>
    <Typography sx={{fontSize:"30px"}}>Save Up to 40%</Typography>
    <Typography sx={{}}>Enjoy more when you book direct</Typography>
</Box>
<Box sx={{position:"absolute",bottom:"0px",width:"100%",backgroundColor:"#000",color:"#FFFFFF",}}>
<Grid container columnSpacing={3} sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px 0px"}}>
<Grid xs={2.5} item>
    <Typography sx={{fontWeight:"600"}} >Check In</Typography>
    <br/>
<TextField type="date"  fullWidth sx={{backgroundColor:"#FFFFFF",height:"45px",display:"flex",alignItems:"center",".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
    height:"12px"
},}}/>
</Grid>
<Grid xs={2.5} item>
    <Typography sx={{fontWeight:"600"}} >Check Out</Typography>
    <br/>
<TextField type="date"  fullWidth sx={{backgroundColor:"#FFFFFF",height:"45px",display:"flex",alignItems:"center",".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
    height:"12px"
},}}/>
</Grid>
<Grid xs={2} item>
    <Typography sx={{fontWeight:"600"}} >Rooms</Typography>
    <br/>
<TextField type="number"  fullWidth sx={{backgroundColor:"#FFFFFF",height:"45px",display:"flex",alignItems:"center",".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
    height:"12px"
},}}/>
</Grid>
<Grid xs={2.5} item>
   <Button sx={{color:"#FFFFFF",backgroundColor:"#00BFA5",marginTop:"40px",borderRadius:"0px",padding:"10px","&:hover":{
    backgroundColor:"#000"
   }}} fullWidth>BOOK A STAY</Button>
</Grid>

</Grid>
</Box>
    </StyleToolbar>
  )
}

export default Content1