import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./SearchPageOptions.css";

import MenuBookIcon from "@material-ui/icons/MenuBook";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";

const SearchPageOptions = () => {
  return (
    <div className="searchPage__options">
      <div className="searchPage__options__left">
        <SearchIcon />
        <Link to="/all">All</Link>
        <ImageSearchIcon />
        <Link to="/all">Images</Link>
        <RoomIcon />
        <Link to="/all">Maps</Link>
        <MenuBookIcon />
        <Link to="/all">News</Link>
        <ShoppingBasketIcon />
        <Link to="/all">Shopping</Link>
        <MoreVertIcon />
        <Link to="/all">More</Link>
      </div>
      <div className="searchPage__options__right">
        <Link to="/settings">Settings</Link>
        <Link to="/tools">Tools</Link>
      </div>
    </div>
  );
};

export default SearchPageOptions;
