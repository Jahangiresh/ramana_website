import React from "react";
import cover1 from "../assets/images/unsplash_hCG34GSdYTA.jpg";
import cover2 from "../assets/images/Rectangle43.png";
import cover3 from "../assets/images/bag.png";
import cover4 from "../assets/images/Rectangle57.png";
import cover5 from "../assets/images/Rectangle49.png";

import { TfiEmail } from "react-icons/tfi";
import "../assets/css/homepage.scss";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__cover">
        <img src={cover1} alt="" />
        <div className="homepage__title">
          <h1>ramana castle</h1>
          <div className="homepage__title__button">
            <span>
              <TfiEmail />
            </span>
            <span className="homepage__title__button__text">
              stay up to date with us
            </span>{" "}
            <span>
              <svg
                width="35"
                height="12"
                viewBox="0 0 35 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.6766 6.53033C34.9694 6.23744 34.9694 5.76256 34.6766 5.46967L29.9036 0.696699C29.6107 0.403806 29.1358 0.403806 28.8429 0.696699C28.55 0.989593 28.55 1.46447 28.8429 1.75736L33.0856 6L28.8429 10.2426C28.55 10.5355 28.55 11.0104 28.8429 11.3033C29.1358 11.5962 29.6107 11.5962 29.9036 11.3033L34.6766 6.53033ZM0 6.75H34.1462V5.25H0V6.75Z"
                  fill="#DAD9D6"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="homepage__cover ">
        <img className="cover2" src={cover2} alt="" />
        <div className="homepage__cover__footwear">
          <h1>footwear</h1>
          <p>made just for you</p>
        </div>

        <div
          style={{ backgroundImage: `url(${cover2})` }}
          className="homepage__cover__footwear-footer"
        >
          <div className="homepage__cover__footwear-footer__row row">
            <div className="homepage__cover__footwear-footer__row__left col-6">
              <span>menswear</span>
            </div>
            <div className="homepage__cover__footwear-footer__row__right col-6">
              <span>womenswear</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__cover ">
        <img className="cover2" src={cover3} alt="" />
        <div className="homepage__cover__footwear">
          <h1>handbags</h1>
          <p>made just for you</p>
        </div>
        <div
          style={{ backgroundImage: `url(${cover3})` }}
          className="homepage__cover__footwear-footer"
        >
          <div className="homepage__cover__footwear-footer__row row">
            <div className="homepage__cover__footwear-footer__row__left col-6">
              <span>menswear</span>
            </div>
            <div className="homepage__cover__footwear-footer__row__right col-6">
              <span>womenswear</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__cover ">
        <img className="cover2" src={cover4} alt="" />
        <div className="homepage__cover__footwear">
          <h1>accessories</h1>
          <p>made just for you</p>
        </div>
        <div
          style={{ backgroundImage: `url(${cover4})` }}
          className="homepage__cover__footwear-footer"
        >
          <div className="homepage__cover__footwear-footer__row row">
            <div className="homepage__cover__footwear-footer__row__left col-6">
              <span>menswear</span>
            </div>
            <div className="homepage__cover__footwear-footer__row__right col-6">
              <span>womenswear</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__cover ">
        <img className="cover2" src={cover5} alt="" />
        <div className="homepage__cover__footwear">
          <h1>accessories</h1>
          <p>made just for you</p>
        </div>
        <div
          style={{ backgroundImage: `url(${cover5})` }}
          className="homepage__cover__footwear-footer"
        >
          <div className="homepage__cover__footwear-footer__row row">
            <div className="homepage__cover__footwear-footer__row__left col-6">
              <span>girls</span>
            </div>
            <div className="homepage__cover__footwear-footer__row__right col-6">
              <span>boys</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
