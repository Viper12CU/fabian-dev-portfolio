"use client";

import React from 'react';

import { Stack } from '@mui/material';

// Molecules
import SkillPapersGroup from '@molecules/SkillPapersGroup';

const AboutMePage: React.FC = () => {
    return (
        <Stack>
            <section id='skills'>
                <SkillPapersGroup />
            </section>
        </Stack>
    );
};

export default AboutMePage;