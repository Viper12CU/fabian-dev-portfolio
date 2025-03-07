"use client"

import theme from "@/theme";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


// Styles
import { buttonStyle, paperStyle, stackStyle } from "./styles";

// Utils
import { navClick } from "@utils/controllers";



const AboutCard = () => {
    return (
        <Paper sx={paperStyle} >
            <Stack spacing={3} direction={{ xs: "column", md: "row" }} sx={stackStyle}>
                <Box sx={{ bgcolor: theme.palette.secondary.main, borderRadius: 2 }} height={"15rem"} width={"20rem"}>
                </Box>
                <Stack spacing={3} direction={"column"}>
                    <Typography variant="h5" color="secondary" fontWeight={"bold"}> Acerca de mí</Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                        vbfibibigfi ifgigog gogofggaigofg gaisgo
                        ggifg fga
                        ggiggbvblbvbvbbhbvcbhddhbfdf
                        sbhfhffhv hfbbvshvjahv
                    </Typography>
                    <Button
                        size="small"
                        endIcon={<ArrowForwardRoundedIcon fontSize="small" />}
                        variant="outlined" sx={buttonStyle}
                        onClick={() => navClick("/about")
                        }>
                        Ver más acerca de mí
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
};


export default AboutCard;