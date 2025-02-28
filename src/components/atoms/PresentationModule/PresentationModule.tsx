
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Stack, Typography } from "@mui/material";

// Styles
import { stackStyles } from "./styles";


const PresentationModule = () => {
    return (
        <Stack direction={"column"} spacing={2} sx={stackStyles} >
            <Typography variant="h3" textAlign={"center"} fontWeight={"bold"}>
                Soy <Box component="span" sx={{ color: 'secondary.main' }}>Fabian Lemus</Box> Desarrollador Front-end.
            </Typography>
            <Typography variant="body1">This is a presentation module</Typography>
            <Stack direction={"row"} spacing={3}>
                <Button variant="contained" color="secondary">Ver proyectos</Button>
                <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon/>} sx={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}>
                    Decargar CV
                </Button>

            </Stack>
        </Stack>
    );

};

export default PresentationModule;