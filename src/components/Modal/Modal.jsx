import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    zIndex: 10,
    backgroundColor: "white",
    border: "none"
};

export default function BasicModal(props) {

    return (
        <div>
            <Modal
                keepMounted
                open={props.open}
                onClose={props.close}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <div style={style}>
                    {props.children}
                </div>

            </Modal>
        </div>
    );
}