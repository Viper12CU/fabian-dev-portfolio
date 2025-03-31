import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Slide, SlideProps } from '@mui/material';

interface SnackbarsProps {
  isEnable?: boolean
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const Snackbars: React.FC<SnackbarsProps> = ({ open, onClose, isEnable = true }) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose} slots={{ transition: SlideTransition }}>
        <Alert
          onClose={onClose}
          severity={isEnable ? "success" : "error"}
          color={isEnable ? "success" : "error"}
          variant="filled"
          sx={{ width: '100%', p: 2 }}
        >
          {isEnable ? "¡El mensaje a sido enviado con exito! 👌" : "Lo sentimos, el servicio no esta disponible en este momento. 🚫"}

        </Alert>
      </Snackbar>
    </div>
  );
}


export default Snackbars;