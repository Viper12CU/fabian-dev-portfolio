import { Box, Paper, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";


// Styles
import { paperStyle } from "./styles";
import { useState } from "react";



interface LenguagePaperProps {
    title: string;
    img: string;
    description: string;
}

const LenguagePaper: React.FC<LenguagePaperProps> = ({ title, img, description }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Paper elevation={3} sx={paperStyle}>
            <Stack
                direction={"column"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
            >

                <Typography variant="h6" align="left" color="secondary" fontWeight={"bold"}>
                    {title}
                </Typography>

                <Box height={70} width={70} position={"relative"}>
                    {isLoading && (
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height="100%"
                            animation="wave"
                        />
                    )}
                    <Image
                        src={img}
                        alt={title}
                        fill
                        style={{
                            objectFit: 'contain',
                            opacity: isLoading ? 0 : 1,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)} // Fallback si hay error
                    /> 
                </Box>



                <Typography pt={2} variant="body2" align="left">
                    {description}
                </Typography>

            </Stack>

        </Paper>

    );
};


export default LenguagePaper;