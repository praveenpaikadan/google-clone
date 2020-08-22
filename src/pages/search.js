import React from "react";
import "./search.css";
import { useStateValue } from "../StateProvider.js";
import useGoogleSearch from "../useGoogleSearch.js";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchPageOptions from "../components/SearchPageOptions";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const SearchPage = () => {
  var [{ term }, despatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          ></img>
        </Link>

        <div className="searchPage__headerBody">
          <SearchBar hideButtons />
          <SearchPageOptions />
        </div>
      </div>

      {term && data && (
        <div className="searchPage__resultContainer">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          <div className="searchPage__results">
            {data.items.map((item) => {
              return (
                <div className="searchPage__result">
                  <a href={item.link} className="searchpage__resultUrl">
                    {item.displayLink}
                    <ArrowDropDownIcon />
                  </a>
                  <a href={item.link} className="searchPage__resultTitle">
                    <h3>{item.title}</h3>
                  </a>
                  <p className="searchPage__resultSnippet">{item.snippet}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
