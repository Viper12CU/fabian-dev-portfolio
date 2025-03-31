import { Box, Paper, Rating, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";


// Styles
import { paperStyle } from "./styles";
import { useState } from "react";



interface TecnologyPaperProps {
    title: string;
    img: string;
    rating: number;
}

const TecnologyPaper: React.FC<TecnologyPaperProps> = ({ title, img, rating }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Paper elevation={3} sx={paperStyle}>
            <Stack
                direction={"column"}
                spacing={4}
                alignItems={"center"}
                justifyContent={"center"}
            >

                <Typography variant="h6" align="left" color="secondary" fontWeight={"bold"}>
                    {title}
                </Typography>

                <Box height={90} width={90} position={"relative"}>
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

                <Rating name="read-only" value={rating} readOnly size="large" />

                

            </Stack>

        </Paper>

    );
};


export default TecnologyPaper;