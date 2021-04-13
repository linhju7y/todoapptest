import React, { useState, useContext } from "react";
import { Checkbox, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
import ClearIcon from "@material-ui/icons/Clear";
import storeApi from "./../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));
export default function Card({ card, index }) {
  const classes = useStyle();
  const { markCompleted, removeTodo } = useContext(storeApi);
  const [completed, setCompleted] = useState(false);
  const [del, setDel] = useState(false);
  const onHandleChecked = () => {
    setCompleted(!completed);
  };

  const onHandleDelete = () => {
    setDel(true);
  };
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {" "}
          {del ? (
            <></>
          ) : (
            <Paper className={classes.card}>
              <Checkbox
                onChange={onHandleChecked}
                checked={completed}
              ></Checkbox>
              {completed ? <strike>{card.title}</strike> : <>{card.title}</>}

              <IconButton
                className={classes.buttonIcon}
                onClick={onHandleDelete}
              >
                {" "}
                <ClearIcon />
              </IconButton>
            </Paper>
          )}
        </div>
      )}
    </Draggable>
  );
}
