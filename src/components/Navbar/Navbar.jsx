import React from "react";
import "./Navbar.scss";
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
        <div className="left">
          <div className="item">
            <img src="\img\en.png" alt="Language" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/4">Accessories</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            <img
              className="brandlogo"
              src="\img\LIMZIHANLOGO.png"
              alt="limzihan"
            />
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/stores">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="carticon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
