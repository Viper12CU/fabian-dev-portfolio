import theme from "@/theme";
import { Box, Grid2, Stack, Typography } from "@mui/material";

// Utils
import { AboutMeInfo } from "@utils/AboutMeInfo";

// Styles
import { containerStyles } from "./styles";


const GeneralAboutInfo = () => {
    return (
        <Grid2 container spacing={4} direction={{ xs: "column", md: "row" }} sx={containerStyles}  >

            <Grid2 size={{ xs: 12, lg: 4 }}>
                <Box sx={{ bgcolor: theme.palette.secondary.main, borderRadius: 2 }} height={"26rem"} width={"22rem"}>
                </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, lg: 8 }}>
                <Stack direction={"column"} spacing={3} sx={{ m: 2 }}>
                    <Typography variant="h4" fontWeight={"bold"} color="secondary">
                        FABIAN LEMUS
                    </Typography>

                    {AboutMeInfo.extensa.map((text, index) => (
                        <Typography key={index} variant="body2" textAlign={"justify"} letterSpacing={1.5}>
                            {text}
                        </Typography>

                    ))}

                </Stack>
            </Grid2>

        </Grid2>
    );

};

export default GeneralAboutInfo;