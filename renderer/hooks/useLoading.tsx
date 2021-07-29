import React, {MouseEventHandler, useState} from "react";
import {Backdrop, makeStyles} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

export function useLoading(): [MouseEventHandler, React.FC] {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setLoading(false);
  }
  const handleToggle = () => {
    setLoading(!loading);
  }

  const component = () => (
      <Backdrop className={classes.backdrop} onClick={handleClose} open={loading}>
        <CircularProgress color="inherit"/>
      </Backdrop>
  )

  return [handleToggle, component]
}