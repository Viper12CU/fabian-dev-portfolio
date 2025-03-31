"use client"

import { Stack, } from "@mui/material"

// Atoms
import AboutCard from "@atoms/AboutCard";
// Molecules
import MainTitle from "@molecules/MainTitle";
import SkillsPreview from "@molecules/SkillsPreview";

// Organisms
import PreviewSection from "@organisms/PreviewSection";





const Home = () => {
  return (
    <Stack direction={"column"} >
      <MainTitle />
      <AboutCard />
      <PreviewSection
        title="Mis habilidades"
        buttonText="Ver más"
        content={<SkillsPreview />}
        path="/about#skills"
      />
    </Stack>
  )

}

export default Home;