import React from "react";
import { Dropdown, Menu } from 'semantic-ui-react'
const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
  ]


const Navbar = () => (
    
    
    <Menu color={"teal"} inverted widths={4} borderless fluid widths={4} size = 'massive' inverted >

{/* 100% */}
    <div class= 'fonty'> 
              
      <Menu.Item > Home</Menu.Item>
      <Dropdown text='Food Menu' pointing className='link item'>
        <Dropdown.Menu>
          <Dropdown.Header>Meals</Dropdown.Header>
          <Dropdown.Item>
            <Dropdown text='Meal Specials'>
              <Dropdown.Menu>
                <Dropdown.Header>Breakfast</Dropdown.Header>
                <Dropdown.Item>Sandwiches</Dropdown.Item>
                <Dropdown.Item>Pancake Special</Dropdown.Item>
                <Dropdown.Item>Dig Bick Breakfast</Dropdown.Item>
                <Dropdown.Item>Get Swole Breakfast Steak</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Lunch</Dropdown.Header>
                <Dropdown.Item>Lunch Buffet</Dropdown.Item>
                <Dropdown.Item>Dig Bick Lunch</Dropdown.Item>
                <Dropdown.Item>Roasted Turkey X*X</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>Dinner *(^_^)*</Dropdown.Item>
          <Dropdown.Item>*Its a Date* Special</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Order Online And Get It Delivered Quick</Dropdown.Header>
          <Dropdown.Item>Status</Dropdown.Item>
          <Dropdown.Item>Cancellations</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>Give us a Review *(^_^)*</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
   
    </div>
    </Menu>
    
  )
  
 
  export default Navbar