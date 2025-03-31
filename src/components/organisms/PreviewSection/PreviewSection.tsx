import { Button, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

// Styles
import { buttonStyle } from "./styles";
import { navClick } from "@utils/controllers";


interface PreviewSectionProps {
    title: string;
    buttonText: string;
    content: ReactNode;
    path: string;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ title, buttonText, content , path}) => {


    return (
        <Stack spacing={15} direction="column" alignItems={"center"} sx={{ mt: 10, mb: 15 }}>
            <Typography variant="h4" color="secondary" fontWeight={"bold"} >{title}</Typography>
            {content}
            <Button
            onClick={() => navClick(path)}
                variant="contained"
                sx={buttonStyle}
                color="secondary"
                endIcon={<ArrowForwardRoundedIcon />}>
                {buttonText}
            </Button>
        </Stack>

    );
};

export default PreviewSection;