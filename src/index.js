import React from "react";
import { render } from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDZgrMQ0PImFB8ZfrWT4fOSNkqqEqXP_7M";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

render(<App />, document.getElementById("root"));
