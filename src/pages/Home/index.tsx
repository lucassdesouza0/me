import React from "react";

import Header from "components/Header";
import Bio from "components/Bio";
import Blog from "components/Blog";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <h4>EM CONSTRUÇÃO</h4>
      <hr />
      <h2>
        <a href="https://github.com/lucassdesouza0">Github</a>
      </h2>
      <h2>
        <a href="https://www.linkedin.com/in/lucassdesouza0/">Linkedin</a>
      </h2>
      {/* <Bio />
      <Blog /> */}
    </>
  );
};

export default Home;
