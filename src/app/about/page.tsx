"use client";

import React from 'react';

import { Stack } from '@mui/material';


// Atoms
import GeneralAboutInfo from '@atoms/GeneralAboutInfo';

// Molecules
import SkillPapersGroup from '@molecules/SkillPapersGroup';
import LenguagePapersGroup from '@molecules/LenguagePaperGroup';
import TecnologyPapersGroup from '@molecules/TecnologyPaperGroup';

const AboutMePage: React.FC = () => {
    return (
        <Stack spacing={30} mb={20}>
            <section id="aboutMe">
                <GeneralAboutInfo />
            </section>
            <section id='skills'>
                <SkillPapersGroup />
            </section>
            <section id='lenguage'>
               <LenguagePapersGroup/>
            </section>
            <section id='tecnologies'>
                <TecnologyPapersGroup />
            </section>
        </Stack>
    );
};

export default AboutMePage;