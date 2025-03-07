import SkillsInfoPaper from "@/components/atoms/SkillsInfoPaper";
import { Grid2, Stack, Typography } from "@mui/material";
import { skillData } from "@utils/SkillsData";

const SkillPapersGroup = () => {
    return (
        <Stack direction={"column"} spacing={10} m={{lg: 20, xl: 30}} alignItems={"center"}>
            <Typography variant="h4" color="secondary" fontWeight={"bold"}>Mis habilidades</Typography>
        <Grid2 container m={10} spacing={3}>
            {skillData.map((skill) => (
                <Grid2 key={skill.title} size={{xs: 12, sm: 6, lg: 4}}>
                    <SkillsInfoPaper 
                    key={skill.title} 
                    title={skill.title} 
                    description={skill.data} 
                    icon={skill.icon} 
                />
                </Grid2>                
            ))}
        </Grid2>
        </Stack>
    );
};

export default SkillPapersGroup;