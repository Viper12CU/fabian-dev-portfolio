import { Box, Paper, Stack, Typography } from "@mui/material";



interface SkillsInfoPaperProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const SkillsInfoPaper: React.FC<SkillsInfoPaperProps> = ({ title, description, icon }) => {
    return (
        <Paper elevation={3}  sx={{
            width: "314px",
            height: "320px",
            p: 3,
        }}>
            <Stack direction="column" spacing={1} alignItems="start">
                <Box>{icon}</Box>
                <Typography  variant="h6" align="left" color="secondary" fontWeight={"bold"}>
                    {title}
                </Typography>
                <Typography pt={2} variant="body2" align="left">
                    {description}
                </Typography>
            </Stack>

        </Paper>
    );
};

export default SkillsInfoPaper;