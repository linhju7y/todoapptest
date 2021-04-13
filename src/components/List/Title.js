import React, { useState, useContext } from "react";
import {
  Typography,
  InputBase,
  colors,
  withWidth,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import storeApi from "../../utils/storeApi";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
    background: "#0e3867",
    textAlign: "center",
    color: "white",
    borderRadius: "1.5%",
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: "1.6rem",
    fontWeight: "bold",
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
  icon: {
    color: "white",
  },
}));
export default function Title({ title, listId, onHandleDelete }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);
  const classes = useStyle();
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handleOnBlur}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
            }}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
          <IconButton onClick={onHandleDelete}>
            {" "}
            <HighlightOffSharpIcon className={classes.icon} />
          </IconButton>
        </div>
      )}
    </div>
  );
}
