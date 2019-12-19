import React from 'react';
import axios from "axios";
import MainMenuList from "./components/MainMenuList";
import MainMenuForm from "./components/MainMenuForm";
import { Container, } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import './App.css';





class App extends React.Component {
  state = { mainmenus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ mainmenus: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  };

  addMainMenu = (name) => {
    axios.post("/api/menus", { name, })
      .then( res => {
        this.setState({ mainmenus: [...this.state.mainmenus, res.data], });
      })
  };

  updateMainMenu = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const mainmenus = this.state.mainmenus.map( mainmenu => {
          if (mainmenu.id === id)
            return res.data;
          return mainmenu;
        });
        this.setState({ mainmenus, });
      })
  };

  deleteMainMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        this.setState({ mainmenus: this.state.mainmenus.filter( t => t.id !== id ) })
      })
  };

  render() {

    return (
      
      
        <>
       <div  className="resst">
       <Navbar />
       
       
       
      
        
       <Container >
       
        <h1  class='boldy' 
        style={{ color: 'black' }}>Jon's Main Menu List</h1>
        
        <MainMenuForm addMainMenu={this.addMainMenu} />
        <br />
        <br />
        <MainMenuList 
          mainmenus={this.state.mainmenus} 
          deleteMainMenu={this.deleteMainMenu} 
          updateMainMenu={this.updateMainMenu}
        />
        
        
        </Container>
        
        </div>
        </>

    
    );
  };
};

export default App;