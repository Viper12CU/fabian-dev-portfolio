
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Stack, Typography } from "@mui/material";

// Styles
import { stackStyles } from "./styles";

// Utils
import { navClick } from '@utils/controllers';

// Atoms
import AnimatedContent from '@atoms/AnimatedContent';



const PresentationModule = () => {
    

    return (
        <>
            <AnimatedContent
                distance={300}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.5}
                animateOpacity
                scale={1.2}
                threshold={0.2}
            >
                <Stack direction={"column"} spacing={2} sx={stackStyles}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={"bold"}>
                        Soy <Box component="span" sx={{ color: 'secondary.main' }}>Fabian Lemus</Box> Desarrollador Front-end.
                    </Typography>
                    <Typography variant="body1">This is a presentation module</Typography>
                    <Stack direction={"row"} spacing={3}>
                        <Button variant="contained" color="secondary" onClick={() => navClick("/proyects")}>
                            Ver proyectos
                        </Button>
                        <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon />} sx={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}>
                            Decargar CV
                        </Button>

                    </Stack>
                </Stack>



            </AnimatedContent>
        </>
    );

};

export default PresentationModule;