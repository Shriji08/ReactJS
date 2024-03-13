import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { UserProvider } from './context/UserContext'; 
import Login from "./components/LoginForm";
import FilterPage from "./components/FilterPage";
import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import Checklist from "./components/Checklist";
import ApiData from "./components/ApiData";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  const images = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8TuP3xKil1b8Jej5fwuJYqw-RU-D9CgxXw&usqp=CAU",
    },
    { id: 2, url: "https://images7.alphacoders.com/133/thumb-350-1330715.png" },
    {
      id: 3,

      
      url: "https://e0.pxfuel.com/wallpapers/845/54/desktop-wallpaper-uni-available.jpg",
    },
    {
      id: 4,
      url: "https://c4.wallpaperflare.com/wallpaper/36/725/297/heart-ocean-love-image-hd-wallpaper-preview.jpg",
    },
  ];

  return (
    <UserProvider>
    <Router>
      <div className="container mt-3">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <h1>Welcome, {userName}!</h1>

            <Navbar bg="light" expand="lg">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/filter">
                  Filter Page
                </Nav.Link>
                <Nav.Link as={Link} to="/counter">
                  Counter
                </Nav.Link>
                <Nav.Link as={Link} to="/item-list">
                  Item List
                </Nav.Link>
                <Nav.Link as={Link} to="/accordion">
                  Accordion
                </Nav.Link>
                <Nav.Link as={Link} to="/image-slider">
                  Image Slider
                </Nav.Link>
                <Nav.Link as={Link} to="/checklist">
                  Checklist
                </Nav.Link>
                <Nav.Link as={Link} to="/api-data">
                  API Data
                </Nav.Link>
              </Nav>
              <Nav.Link onClick={handleLogout} className="btn btn-danger">
                Logout
              </Nav.Link>
            </Navbar>

            <Switch>
              <Route path="/filter">
                <FilterPage name={userName} onLogout={handleLogout} />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/item-list">
                <ItemList />
              </Route>
              <Route path="/accordion">
                <Accordion />
              </Route>
              <Route path="/image-slider">
                <ImageSlider images={images} />
              </Route>
              <Route path="/checklist">
                <Checklist />
              </Route>
              <Route path="/api-data">
                <ApiData />
              </Route>
            </Switch>
          </>
        )}
      </div>
    </Router>
    </UserProvider>
  );
};

export default App;
