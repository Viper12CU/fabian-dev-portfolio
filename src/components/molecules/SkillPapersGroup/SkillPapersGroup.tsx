import SkillsInfoPaper from "@/components/atoms/SkillsInfoPaper";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { skillData } from "@utils/SkillsData";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fondoStyle, motionStyle } from "./styles";




const SkillPapersGroup = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    


    return (
        <Stack direction={"column"} spacing={10} mx={{ lg: 20, xl: 30 }} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h4" color="secondary" fontWeight={"bold"}>Mis habilidades</Typography>
            <Grid2 container m={10} spacing={3} sx={{ display: "flex", justifyContent:"center"}}>
                {skillData.map((skill, index) => (

                    <Grid2
                        size={{xs: 9, sm: 4, xl: 3}}
                        key={index}
                        sx={{ position: "relative" }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.span
                                    style={motionStyle}
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 1,
                                        transition: { duration: 0.15, delay: 0.7},
                                    }}
                                >
                                    <Box sx={fondoStyle} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <SkillsInfoPaper
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