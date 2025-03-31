import SkillsInfoPaper from "@/components/atoms/SkillsInfoPaper";
import { Stack } from "@mui/material";
import { skillData } from "@utils/SkillsData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsPreview = () => {
    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const ref = useRef(null); // Referencia para el elemento
    const isInView = useInView(ref, { once: true });


    return (
        <Stack direction={{ lg: "row", xs: "column" }} spacing={5} ref={ref}>
            <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0 * 0.4 }}
            >
                < SkillsInfoPaper title={skillData[0].title} icon={skillData[0].icon} description={skillData[0].data} />
            </motion.div>

            <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 1 * 0.2 }}
            >
                < SkillsInfoPaper title={skillData[1].title} icon={skillData[1].icon} description={skillData[1].data} />

            </motion.div>

            <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 2 * 0.2 }}
            >
                < SkillsInfoPaper title={skillData[2].title} icon={skillData[2].icon} description={skillData[2].data} />
            </motion.div>


        </Stack>

    );
}

export default SkillsPreview;