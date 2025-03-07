import { colors, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface CustomTextFieldProps {
    title: string;
    label: string;
    id: string;
    isMultiline?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChage: any;
}

const WhiteTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'secondary',
        },
    },
    '& .MuiInputLabel-root': {
        color: `${colors.grey[500]}`,
    },

});

const CustomTextField: React.FC<CustomTextFieldProps> = ({ onChage, title, label, id, isMultiline = false, value }) => {
    return (
        <Stack sx={{ width: "100%" }}>
            <Typography variant="body1" mb={1} ml={1}>{title}</Typography>
            <WhiteTextField
                onChange={onChage}
                value={value}
                multiline={isMultiline}
                rows={isMultiline ? 5 : 1}
                id={id}
                variant="outlined"
                color="secondary"
                placeholder={label}
                fullWidth />
        </Stack>
    );
};

export default CustomTextField;
