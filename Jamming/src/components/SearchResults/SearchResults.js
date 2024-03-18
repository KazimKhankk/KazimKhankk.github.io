import React, { useEffect, useState } from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  const [neon, setNeon] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setNeon(true);
      setTimeout(() => {
        setNeon(false);
      }, 500);
      props.onAdd(props.searchResults);
    }
  };

  return (
    <div className="SearchResults">
      <h2 id={neon ? "neon" : ""} className={neon ? "glow" : ""}>
        Results
      </h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;
