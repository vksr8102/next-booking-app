import { Call, LocationOn, Mail } from '@mui/icons-material'
import { Button, InputBase, Typography } from '@mui/material'
import { alpha, Box, styled } from '@mui/system'
// import Head from 'next/head'
import React from 'react'
const StyleToolbar=styled(Box)({
    padding:"38px 58px",
    backgroundColor:"#000"
});
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    backgroundColor:"#FFFFFF",
    marginLeft: 0,
    width: '100%',
    padding:"6px 10px"
   
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right:"0px",
    bottom:"0px"
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'inherit',
    '& .MuiInputBase-input': {
      width: '100%',
      height:"100%"
    },
  }));
const Footer = () => {
  return (
    <StyleToolbar>
    <Box sx={{display:"flex",justifyContent:"space-between",color:"#FFFFFF"}}>
<Box>
<Typography sx={{color:"#CCCCCC",fontSize:"20px"}}>Book Your Travel Hotel</Typography>
<br/>
<Typography sx={{ display:"flex",alignItems:"center",gap:"10px"}}><LocationOn sx={{fontSize:"14px"}}/> Prem Nager, Haridwar(Uttrakhand), India</Typography>
<Typography sx={{ display:"flex",alignItems:"center",gap:"10px"}}><Call sx={{fontSize:"14px"}}/> +91 9999999999</Typography>
<Typography sx={{ display:"flex",alignItems:"center",gap:"10px"}}><Mail sx={{fontSize:"14px"}}/> info@techpyro.com</Typography>
    </Box>
<Box>
<Search>
         
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
               <SearchIconWrapper>
             <Button sx={{backgroundColor:"#00BFA5",padding:"10px 5px",color:"#FFFFFF","&:hover":{
                backgroundColor:"#000"
             }}}>SIGN UP</Button>
            </SearchIconWrapper>
          </Search>
    </Box>
 </Box>
    </StyleToolbar>
  )
}

export default Footer