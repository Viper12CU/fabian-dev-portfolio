import { Box, Grid2, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


// Atoms
import LenguagePaper from "@/components/atoms/LenguagePaper";


//Styles
import { fondoStyle, motionStyle } from "./styles";


// Utils
import { LenguajesInfo } from "@utils/TecnologyInfo";




const LenguagePapersGroup = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    


    return (
        <Stack direction={"column"} spacing={10} mx={{ lg: 20, xl: 30 }} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h4" color="secondary" fontWeight={"bold"}>Lenguajes que domino</Typography>
            <Grid2 container m={10} spacing={3} sx={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
                {LenguajesInfo.map((item, index) => (

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
                        <LenguagePaper img={item.img} description={item.description} title={item.title}/>
                    </Grid2>
                ))}
            </Grid2>
        </Stack>
    );
};

export default LenguagePapersGroup;