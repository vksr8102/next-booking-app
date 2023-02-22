import { Padding, SettingsOutlined } from '@mui/icons-material';
import { styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NavButton from '../NavButton';
// import NavButton from '../NavButton';
const StyleToolbar = styled(Box)(({theme})=>({
    position:"sticky",
    top:"0px",
    backgroundColor:"#FFFFFF",
    zIndex:"100"
}))
const Navbar = () => {
  return (
    <StyleToolbar>
      <Box sx={{position:"relative"}}>
<Box sx={{display:"flex",justifyContent:"space-between",padding:"18px 58px"}}>
    <Box sx={{display:"flex",color:"#858585",alignItems:"center"}}>
    <Typography sx={{fontSize:"10px"}}>CALL US:</Typography>
    <Typography sx={{fontSize:"10px"}}>+91 9999999999</Typography>
    </Box>
    <Typography sx={{display:"flex",fontSize:"10px",color:"#858585",}}>EN  ES  RT  RU</Typography>
</Box>
<Box sx={{display:"flex",justifyContent:"center"}}>
    <Typography sx={{fontSize:{md:"30px",sm:"28px",xs:"20px"}}}>BOOK YOUR TRAVEL HOTEL</Typography>
</Box>
<br/>
<Box sx={{ backgroundColor:"#EEEEEE",}}>
<NavButton/>
</Box>
<Box sx={{position:"absolute",bottom:"-30px",right:"0px",backgroundColor:"#FFFFFF",padding:"10px 10px",borderRadius:"10px 0px 0px 10px",zIndex:"100"}}>
<SettingsOutlined sx={{fontSize:"30px"}}/>
</Box>
</Box>
    </StyleToolbar>

  )
}

export default Navbar