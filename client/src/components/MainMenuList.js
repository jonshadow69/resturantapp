import React from "react";
import MainMenu from "./MainMenu";

const MainMenuList = (props) => (
  <div>
    { props.mainmenus.map( mainmenu => (
      <MainMenu 
        key={mainmenu.id} 
        {...mainmenu} 
        deleteMainMenu={props.deleteMainMenu} 
        updateMainMenu={props.updateMainMenu}
      />
    ))}
  </div>
);

export default MainMenuList;