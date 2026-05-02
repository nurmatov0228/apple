import React, { Component } from "react";
import "./noinsect.scss";

export default class Noinsect extends Component {
  render() {
    return (
      <section className="noinsect" id="noinsects">
        <div className="container">
          <div className="noinsect__flex">
            <div className="noinsect__tr"></div>
            <div className="noinsect__info">
              <div
                className="animated"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
                id="animated"
              >
                <h2 className="noinsect__title">
                  Competition
                </h2>
              </div>
              <div
                className="animated"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
                id="animated"
              ><div className="noinsect__text">
  <h3>1. Competitors:</h3>
  <ul>
    <li>Samsung</li>
    <li>Xiaomi</li>
  </ul>

  <h3>2. About competitors:</h3>
  <p>
    Samsung produces smartphones and electronics like Apple, but often at different price ranges.  
    Xiaomi offers cheaper smartphones with good features, making it popular in many countries.
  </p>

  <h3>3. Comparison:</h3>
  <p>
    Compared to Samsung and Xiaomi, Apple products are more expensive but have better software integration and design.  
    Apple focuses more on premium quality, while competitors focus on affordability and variety.
  </p>
</div>
              </div>
              <div
                className="animated"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
                id="animated"
              >
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
