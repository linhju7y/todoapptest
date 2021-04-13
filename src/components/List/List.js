import React, { useState } from "react";
import {
  Paper,
  Typography,
  CssBaseline,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";
import { Droppable, Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
  title: {
    display: "flex",
  },
}));
export default function List({ list, index }) {
  const classes = useStyle();
  const [delList, setDelList] = useState(false);
  const onHandleDelete = () => {
    setDelList(true);
  };

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          {delList ? (
            <></>
          ) : (
            <Paper className={classes.root} {...provided.dragHandleProps}>
              <CssBaseline />

              <Title
                className={classes.p}
                title={list.title}
                listId={list.id}
                onHandleDelete={onHandleDelete}
              />

              <Droppable droppableId={list.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={classes.cardContainer}
                  >
                    {list.cards.map((card, index) => (
                      <Card key={card.id} card={card} index={index} />
                    ))}
                  </div>
                )}
              </Droppable>

              <InputContainer listId={list.id} type="card" />
            </Paper>
          )}
        </div>
      )}
    </Draggable>
  );
}
