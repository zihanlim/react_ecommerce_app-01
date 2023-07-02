import React from "react";
import styles from "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="Left">
          <div className="item">
            <img src="\img\en.png" alt="Language" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>

          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>

          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>

          <div className="item">
            <Link to="/products/4">Accessories</Link>
          </div>
        </div>
      </div>

      <div className="Center">
        <Link to="/">
          <img src="\img\LIMZIHANLOGO.png" width="100px" alt="limzihan" />
        </Link>
      </div>

      <div className="Right">
        <div className="item">
          <Link to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link to="/about">About</Link>
        </div>
        <div className="item">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="item">
          <Link to="/stores">Stores</Link>
        </div>
        <div className="icons">
          <SearchIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <div className="carticon">
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
