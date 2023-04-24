// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IconName } from "react-icons/fa";
// pages input

import "./pages/home/Liveauction/Liveauction";
import "./pages/home/Explore/Explore";
import "./pages/home/Slides/Slides";
import "./pages/home/Footer/Footer";

// components
import "./components/routes/Navbar";
// import "./components/Navbar/Exp";
// import "./components/Navbar/Searchbar";
// import "./components/Navbar/Signup";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/routes/Navbar";
// import Exp from "./components/Navbar/Exp";

// import Searchbar from "./components/Navbar/Searchbar";
// import Signup from "./pages/auth/Signup/Signup";
import Footer from "./pages/home/Footer/Footer";
import Liveauction from "./pages/home/Liveauction/Liveauction";
import Explore from "./pages/home/Explore/Explore";
import Slides from "./pages/home/Slides/Slides";
import Wallet from "./pages/auth/Wallet/Wallet";

// import { FullscreenExit } from "@mui/icons-material";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [myid, setMyId] = useState(1);

  const handleOpen = (id) => {
    setMyId(id);
    setOpenModal(true);
    console.log("yoyo honey singh");
  };
  console.log("mera id", myid);
  const handleClose = () => {
    console.log("yoyo honey singh 2");
    setOpenModal(false);
  };
  return (
    <div>
      ...
      {console.log("...")}
      <Navbar
        myid={myid}
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      {/* <Signup /> */}
      <Slides
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      ></Slides>
      <Liveauction
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      ></Liveauction>
      <Explore
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      ></Explore>
      <Footer></Footer>
      <Wallet
        myid={myid}
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
  // eslint-disable-next-line no-unreachable
}
export default App;
