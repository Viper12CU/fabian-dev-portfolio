import SkillsInfoPaper from "@/components/atoms/SkillsInfoPaper";
import { Stack } from "@mui/material";
import { skillData } from "@utils/SkillsData";

const SkillsPreview = () =>{
    return (
        <Stack direction={{lg:"row", xs: "column"}} spacing={5}>
            < SkillsInfoPaper title={skillData[0].title} icon={skillData[0].icon} description={skillData[0].data}/>
            < SkillsInfoPaper title={skillData[1].title} icon={skillData[1].icon} description={skillData[1].data}/>
            < SkillsInfoPaper title={skillData[2].title} icon={skillData[2].icon} description={skillData[2].data}/>
        </Stack>

    );
}

export default SkillsPreview;