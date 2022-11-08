import { useContext } from 'react'
import AuthContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Alert } from '@mui/material';
import { Button, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color:"warning",
    size:"md",
    boxShadow: 24,
    p: 4,
    bgcolor: 'orange'
};

export default function MUIAccountErrorModal() {
    const { auth } = useContext(AuthContext);

    function handleCloseModal(event) {
        auth.hideErrorModal();
    }

    return (
        <Modal
            open={auth.loginError !== null} 
        >
            <Box sx={style}>
                <Alert severity="warning">
                    <Typography>{auth.loginError}</Typography>
                </Alert>
                <div id="confirm-cancel-container">
                <Button variant="contained" onClick={handleCloseModal} style={{}}>Close</Button>

                </div>
            </Box>
            {/* <Box sx={style}>
                <div className="modal-dialog">
                <header className="dialog-header">
                    <Alert severity="warning">{auth.loginError}</Alert>
                </header>
                <div id="confirm-cancel-container">
                    <Button variant="contained" onClick={handleCloseModal}>Close</Button>
                </div>
            </div>
            </Box> */}
        </Modal>
    );
}