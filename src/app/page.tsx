"use client"

import { Box, Stack, } from "@mui/material"

// Molecules
import MainTitle from "@molecules/MainTitle";




const Home = () => {
  return (
    <Stack direction={"column"} spacing={2} >
      <MainTitle/>

      <Box height={1000}></Box>
    </Stack>
  )

}

export default Home;