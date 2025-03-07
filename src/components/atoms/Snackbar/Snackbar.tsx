import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Slide, SlideProps } from '@mui/material';

interface SnackbarsProps {
    open: boolean;
    onClose: (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
  }

  function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
  }

const Snackbars: React.FC<SnackbarsProps> = ({open, onClose}) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose} slots={{transition: SlideTransition}}>
        <Alert
          onClose={onClose}
          severity="success"
          color='success'
          variant="filled"
          sx={{ width: '100%', p: 2 }}
        >
          ¡El mensaje a sido enviado con exito! 👌
        </Alert>
      </Snackbar>
    </div>
  );
}


export default Snackbars;