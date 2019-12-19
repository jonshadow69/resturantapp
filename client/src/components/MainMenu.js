import React from "react";
import {Header, Button, Icon ,Card, Grid } from "semantic-ui-react";

const MainMenu = (props) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      
      <div style={props.complete ? styles.complete : {}}>
        <Grid style={{ marginLeft: "5px", }}><b>{ props.name }</b></Grid>
      </div>
    </div>
    <Button
      icon 
      color="black"
      size="tiny"
      style={{marginLeft: "30px"}}
      
      onClick={() => props.deleteMainMenu(props.id)}
    >
      <Icon name="trash alternate outline" />
    </Button>
  </div>
);

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "white",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};    

export default MainMenu;