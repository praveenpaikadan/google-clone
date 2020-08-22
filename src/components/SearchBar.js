import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"; //to del with browser's history
import { useStateValue, actionTypes } from "../StateProvider";
import { Link } from "react-router-dom";

const SearchBar = ({ hideButtons }) => {
  const [term, despatch] = useStateValue();
  const [input, setInput] = useState();
  const [buttonHidden, setButtonHidden] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    despatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    console.log("Search is :" + input);
    if (input != "") {
      history.push("/search");
    }
  };

  useEffect(() => {
    if (hideButtons == true) {
      setButtonHidden("hidden");
    }
  });

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search_icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <MicIcon />
      </div>

      <div className={"google-buttons " + buttonHidden}>
        <Button type="submit" onClick={search}>
          Google Search
        </Button>

        <Button>
          <a
            style={{ "text-decoration": "none", color: "inherit" }}
            href="https://www.google.com/doodles/"
          >
            I'm feeling lucky
          </a>
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
