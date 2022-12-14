/*Nick
Out of the box modal to 'illustrate' error boundary fallback.  
*/

import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const Fallback = () => {

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exception
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Fix your code and try again........
                      <Button onClick={handleClose}>Close</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
