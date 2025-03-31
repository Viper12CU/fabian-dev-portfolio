import { useState } from "react";
import { Box, Button, Paper, SnackbarCloseReason, Stack } from "@mui/material";
import { paperStyle, stackStyle } from "./styles";
import CustomTextField from "@/components/atoms/CustomTextField";
import { Send } from "@mui/icons-material";
import Snackbars from "@/components/atoms/Snackbar/Snackbar";
import React from "react";


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loading, setLoading] = React.useState(false);

    // * Editar variable para cuando este disponible el servicio
    const isEnable = false;


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);

    const handleSubmit = () => {
        const data = {
            name,
            email,
            message
        };
        const jsonData = JSON.stringify(data, null, 2);
        console.log(jsonData)
        setSnackbarOpen(true);
        setLoading(false);
    };

    const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const startTimer = () => {
        setLoading(true)
        setTimeout(handleSubmit, isEnable ? 3000 : 500);
    };

    return (
        <Paper sx={paperStyle}>
            <Stack sx={stackStyle} direction={"column"} spacing={4}>
                <CustomTextField title="Tú nombre" label="Nombre" id="name" value={name} onChage={handleNameChange} />
                <CustomTextField title="Tú E-mail" label="example@gmail.com" id="email" value={email} onChage={handleEmailChange} />
                <CustomTextField title="Escribe tú mensaje" label="Hey...." id="messaje" isMultiline value={message} onChage={handleMessageChange} />
                <Button
                    color="secondary"
                    variant="contained"
                    sx={{ p: 1.5, color: 'white', '& .MuiSvgIcon-root': { color: 'white' } }}
                    endIcon={!loading ? <Send /> : null}
                    onClick={startTimer}
                    loading={loading && isEnable}
                    loadingIndicator={<Box style={{ color: 'white' }}>Enviando...</Box>}
                >
                    Enviar
                </Button>
            </Stack>
            <Snackbars open={snackbarOpen} onClose={handleSnackbarClose} isEnable={isEnable} />
        </Paper>
    );
};

export default ContactForm;