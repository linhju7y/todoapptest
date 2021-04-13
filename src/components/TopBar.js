import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(2),
    
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    flexGrow: 1,
    color: '#0e3867',
    
  },
}));

export default function TopBar({ setOpen }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>DASHBOARD</Typography>
    </div>
  );
}
