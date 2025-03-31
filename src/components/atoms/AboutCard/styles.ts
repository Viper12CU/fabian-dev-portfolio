import { colors } from "@mui/material";

const paperStyle ={
    maxWidth: "45rem",
    height: "fit-content",
    width: "fit-content",
    borderRadius: 3,
    border: `1px solid ${colors.grey[800]}`,
    boxShadow: `1px 1px 150px ${colors.grey[800]}`,
    m: {
        md:"9rem auto",
        xs: 2,
    },
    mt: {
        xs: 16,
    },
    p: 1
};

const gridImgStyle = {
    p: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const buttonStyle = { 
    borderColor: "white", 
    color: "white", 
    width: "fit-content" 
};



export {paperStyle, gridImgStyle, buttonStyle};