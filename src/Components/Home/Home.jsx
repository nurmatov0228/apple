import React, { Component } from "react";
import "./home.scss";
import tozalovchi from "../Assets/img/Steve Jobs.jpg";


export default class Home extends Component {
  render() {
    return (
      <section className="home" id="home">
        <div className="container">
          <div className="home__flex">
            <div className="home__left">
              <div className="home__hero_top">
                <div
                  className="animated"
                  data-aos="fade-right"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <h1 className="home__title">Overview</h1>
                </div>
                <div
                  className="animated"
                  data-aos="fade-right"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="top-bottom"
                >
                                       <p className="home__info">
  <strong>Apple</strong> — technology company. It was founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne.  

  It started in the United States and now designs and sells electronic devices, software, and online services.  

  Its most popular products are <b>iPhone</b>, <b>Mac</b>, <b>iPad</b>, and <b>Apple Watch</b>.  

  The company also offers services like iCloud, Apple Music, and the App Store.  

  Apple is known for modern design, high quality, and innovation. Today it is one of the most valuable companies in the world with millions of users globally.
</p>
                </div>
                <div className="mini_pic_home">
                
                </div>
              </div>
              <div
                className="animated "
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
              >
                
              </div>
            </div>
            <div className="home__right">
              <img
                className="home__rightpic"
                src={tozalovchi}
                alt="bu yerda rasm bor"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
