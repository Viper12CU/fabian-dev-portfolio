"use client";
import {Stack, Typography} from '@mui/material';

// Molecules
import ContactForm from '@molecules/ContactForm';


import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <Stack mt={6} >
            <Typography variant='h3' color='secondary' textAlign={"center"} fontWeight={"bold"} mb={2} >
                ¡Hablemos!
            </Typography>
            <Typography variant='body1' textAlign={"center"} >
                Si estas interesado en mi trabajo o tienes alguna inquietud, no dudes en contactarme.
            </Typography>
            <ContactForm/>
        </Stack>
    );
};

export default ContactPage;