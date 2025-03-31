

import { colors, Divider, Stack, Typography } from "@mui/material";

// Atoms
import Threads from "@atoms/FooterBackground";

// Molecules
import FooterNavGroup from "@molecules/FooterNavsGroup";



const Footer = () => {
    return (
        <Stack >
            <Stack sx={{ width: "100%", height: "15rem", position: "absolute", bgcolor: "#111112"}}>
                <Threads
                    amplitude={12}
                    distance={0.1}
                    enableMouseInteraction={true} />

                <Divider variant="middle" sx={{bgcolor: colors.grey[800], m: "0 3rem" }}/>
                <Stack sx={{ p: 2, m: "0 3rem", bgcolor: "transparent" }}>
                    <Typography variant="caption">Bla bla bla</Typography>
                </Stack>
            </Stack>
            <FooterNavGroup />

        </Stack>
    )

};

export default Footer;