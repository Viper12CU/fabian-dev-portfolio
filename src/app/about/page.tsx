"use client";

import React from 'react';

import { Stack } from '@mui/material';


// Atoms
import GeneralAboutInfo from '@atoms/GeneralAboutInfo';

// Molecules
import SkillPapersGroup from '@molecules/SkillPapersGroup';

const AboutMePage: React.FC = () => {
    return (
        <Stack>
            <section id= "aboutMe">
                <GeneralAboutInfo/>
            </section>
            <section id='skills'>
                <SkillPapersGroup />
            </section>
        </Stack>
    );
};

export default AboutMePage;