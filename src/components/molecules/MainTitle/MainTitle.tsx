import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";


// Atoms
import PresentationModule from "@atoms/PresentationModule";

// Styles
import { boxStyle, stackStyle } from "./styles";




const MainTitle: React.FC = () => {
    

    return (
        <Stack sx={stackStyle}>
            <Image
                src="/mainTitle-backgrond.jpg"
                alt="Background"
                fill
            />
            <Box sx={boxStyle}>
                <PresentationModule />
            </Box>
        </Stack>
    );


}

export default MainTitle;