"use client"

import theme from "@/theme";
import { Box, Button, Grid2, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


// Styles
import { buttonStyle, gridImgStyle, paperStyle } from "./styles";

// Utils
import { navClick } from "@utils/controllers";
import { AboutMeInfo } from "@utils/AboutMeInfo";



const AboutCard = () => {
    return (
        <Paper sx={paperStyle} >
            <Grid2 container spacing={3} direction={{ xs: "column", md: "row" }} sx={gridImgStyle}>
                <Grid2 size={{ xs: 12, md: 2 }} >
                    <Box sx={{ bgcolor: theme.palette.secondary.main, borderRadius: 2 }} height={"18rem"} width={"12rem"}>
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 8 }} direction={"column"} >
                    <Stack spacing={3}>
                        <Typography variant="h5" color="secondary" fontWeight={"bold"}> Acerca de mí</Typography>
                        <Typography variant="body1" textAlign={"justify"}>
                            {AboutMeInfo.general}
                        </Typography>
                        <Button
                            size="small"
                            endIcon={<ArrowForwardRoundedIcon fontSize="small" />}
                            variant="outlined" sx={buttonStyle}
                            onClick={() => navClick("/about#aboutMe")
                            }>
                            Ver más acerca de mí
                        </Button>
                    </Stack>
                </Grid2>
            </Grid2>
        </Paper>
    );
};


export default AboutCard;