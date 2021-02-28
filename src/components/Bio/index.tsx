import React from "react";

// import { Container } from './styles';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="bio-container">
      <h2>BIO</h2>
      <div className="time-line">
        <div className="lines">
          <div className="dot"></div>
          <div className="line small"></div>
          <div className="dot"></div>
          <div className="line medium"></div>
          <div className="dot"></div>
          <div className="line large"></div>
          <div className="dot"></div>
        </div>
        <div className="text-boxes">
          <div className="box">
            <p>:baby:</p>
          </div>
          <div className="box small">
            <p>Teste</p>
          </div>
          <div className="box medium">
            <p>Teste</p>
          </div>
          <div className="box large">
            <p>Teste</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
