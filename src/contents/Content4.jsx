import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const Top = styled(Box)(({ theme }) => ({
  display: "flex",
}));
const Middle = styled(Box)(({ theme }) => ({
  display: "flex",
}));
const Bottom= styled(Box)(({ theme }) => ({
  display: "flex",
}));
const Content4 = () => {
  return (
    <>
      <Top>
        <Box sx={{ flex: "1.55", padding: "58px 58px" }}>
          <Typography sx={{ fontSize: "10px" }}>
            INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Dining & Bars</Typography>
          <br />
          <br />
          <Typography>
            Of brilliant syntheses a mote of dust suspended in a sunbeam across
            the centuries a mote of dust suspended in a sunbeam network of
            wormholes the sky calls to us and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </Typography>
          <br />
          <br />
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "2",
            background: `url("https://images.pexels.com/photos/4917176/pexels-photo-4917176.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
          }}
        />
      </Top>
      <Middle>
        <Box
          sx={{
            flex: "2",
            background: `url("https://images.pexels.com/photos/6702943/pexels-photo-6702943.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
          }}
        />
        <Box sx={{ flex: "1.7", padding: "58px 58px" }}>
          <Typography sx={{ fontSize: "10px" }}>
            LUXURIOUS EXPERIENCE
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Wellness & SPA</Typography>
          <br />
          <br />
          <Typography>
            Of brilliant syntheses a mote of dust suspended in a sunbeam across
            the centuries a mote of dust suspended in a sunbeam network of
            wormholes the sky calls to us and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </Typography>
          <br />
          <br />
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Middle>
      <Bottom>
        <Box sx={{ flex: "1.55", padding: "58px 58px" }}>
          <Typography sx={{ fontSize: "10px" }}>
          INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Meetings & Events</Typography>
          <br />
          <br />
          <Typography>
            Of brilliant syntheses a mote of dust suspended in a sunbeam across
            the centuries a mote of dust suspended in a sunbeam network of
            wormholes the sky calls to us and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </Typography>
          <br />
          <br />
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "2",
            background: `url("https://images.pexels.com/photos/15434151/pexels-photo-15434151.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
          }}
        />
      </Bottom>
      <Box sx={{display:"flex",backgroundColor:"#00BFA5",padding:"58px",justifyContent:"space-between",alignItems:"center"}}>
        <Typography  sx={{color:"#FFFFFF",fontSize:"22px"}}>Book Your Travel - you could be running your online business by tomorrow.</Typography>
        <Button sx={{color:"#FFFFFF",backgroundColor:"#000",borderRadius:"0px",padding:"10px 10px",fontSize:"18px","&:hover":{
            backgroundColor:"#000"
        }}}>GET STARTED NOW</Button>
      </Box>
    </>
  );
};

export default Content4;
