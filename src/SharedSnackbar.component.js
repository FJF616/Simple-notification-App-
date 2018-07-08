import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

const SharedSnackbar = () => (
    <SharedSnackbarConsumer>
    {({ snackbarIsOpen, message, closeSnackbar }) => (
        <snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={snackbarIsOpen}
            autoHideDuration={6000}
            onClose={closeSnackbar}
            message={message}
            action={[
                <IconButton key="close" color="inherit" onClick={closeSnackbar}>
                    <Close />
                </IconButton>,
              ]}
            />
          )}  
        </SharedSnackbarConsumer>
        );

        export default SharedSnackbar;