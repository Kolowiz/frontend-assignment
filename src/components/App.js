import React, { useState } from "react";

import Header from "./Header";
import MovieList from "./MovieList";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container">
      <Header onSearch={setSearchQuery} />
      <MovieList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
