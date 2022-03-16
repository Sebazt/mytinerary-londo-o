import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

//material ui
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


function Snack(props) {
  const dispatch = useDispatch()

  const useStyles = makeStyles(theme => ({
    icon: {
      marginLeft: '15px'
    }
  }));

  const MySnackbar = styled(Snackbar)({
    backgroundColor: props.snackbar.success ? '#0cf574' : '#d81159',
    color: '#fff',
    borderRadius: '8px',
    border:"1px solid #000",
    padding: '6px 16px',
    fontWeight: '400',
    lineHeight: '1.43',
    letterSpacing: '0.01071em'
  });

  const classes = useStyles();

  const handleClose = () => {
    dispatch({
      type: 'message',
      payload: {
        view: false,
        message: '',
        success: false
      }
    });
  };

  return (
    <div className='snackbar-alert'>
      {props.snackbar.view === true && (
        <MySnackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={props.snackbar.view}
          onClose={handleClose}
          autoHideDuration={7000}
        >
          <>
            {(typeof props.snackbar.message) === "string" ?
              (<p>{props.snackbar.message}</p>) :
              <ul>
                {props.snackbar.message.map(message =>
                  <li>{message.message}</li>
                )}
              </ul>
            }
            <IconButton className={classes.icon} size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        </MySnackbar>
      )}

    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    snackbar: state.userReducer.snackbar,

  }
}

export default connect(mapStateToProps, null)(Snack);