import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div data-testid="banner" className="c-Banner">
      <div className="c-BannerInfo">
        <span>Front-end</span>
        <h2 aria-label="valtech">Valtech_</h2>
        <p aria-label="webapp banner">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          Lorem Ipsum has been.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1533075429495-24b624e72cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="valtech banner"
      />
    </div>
  );
};

export default Banner;
