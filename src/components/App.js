import React from "react";
import Giflistcontainer from "../containers/GifListContainer";

import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <Giflistcontainer />
    </div>
  );
};

export default App;
