import React, { useEffect, useRef, useState } from 'react';
import { Button, Box } from '@mui/material';
import { styled} from '@mui/system';


// Styles
import { buttonStyle } from './styles';
import theme from '@/theme';





interface NavBarButtonProps {
    isSelected: boolean;
    label: string;

}


const AnimatedLine = styled(Box)(({}) => ({
    marginTop: '-0.2rem',
    height: '2.5px',
    backgroundColor: theme.palette.secondary.main,
    transition: 'width 0.3s ease',
    borderRadius: '1px 1px 0 0',
}));

const NavBarButton: React.FC<NavBarButtonProps> = ({isSelected, label}) => {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const [lineWidth, setLineWidth] = useState(0);
    
    useEffect(() => {
        if (buttonRef.current) {
            setLineWidth(buttonRef.current.offsetWidth);
        }
    }, [isSelected]);



    return (
        <Box display="flex" flexDirection="column" alignItems="center" >
        <Button ref={buttonRef}  sx={buttonStyle}>
            {label}
        </Button>
        <AnimatedLine
            sx={{
                width: isSelected ? `${lineWidth-1}px` : '0',
            }}
        />
    </Box>

        
    );
};

export default NavBarButton;


