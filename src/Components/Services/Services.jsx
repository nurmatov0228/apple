import React, { Component } from "react";
import "./services.scss";
import virus from "../Assets/img/1photo.png";
import burga from "../Assets/img/2photo.png";
import sichqon from "../Assets/img/3photo.png";



export default class Services extends Component {
  render() {
    return (
      <section className="service" id="service">
        <div className="container">
          <div
            className="animated"
            data-aos="flip-up"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="service__title">Problemsr</h2>
          </div>
          <div
            className="animated"
            data-aos="flip-up"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
          >
            
          </div>
          <div className="top_service__flex ">
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="top_ser_cards">
                <img className="topser_card_pic" src={virus} alt="dsadasda" />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                    1. High prices:
                  </h3>
                  <p className="topser_card_text">
                    One problem is that Apple products are very expensive, so not everyone can buy them. This limits the number of customers, especially in developing countries.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="top_ser_cards">
                <img
                  className="topser_card_pic"
                  src={burga}
                  alt="sdasdasdads"
                />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                    2. Strong competition:
                  </h3>
                  <p className="topser_card_text">
                   Another issue is strong competition from companies like Samsung and Xiaomi. These companies offer similar products at lower prices, which attracts many users.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="top_ser_cards">
                <img className="topser_card_pic" src={sichqon} alt="dasdasda" />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                    3. Other weaknesses:
                  </h3>
                  <p className="topser_card_text">
                    Apple also depends heavily on iPhone sales for its revenue. Sometimes, customers complain about limited customization and a closed system. The company may face challenges in keeping innovation at a high level every year.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="animated"
            data-aos="flip-up"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="service__title">EXTRA TASKS</h2>
             <h2 className="service__title">SWOT Analysis </h2>
          </div>
          <div className="service__flex">
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">Strengths "Kuchli tomonlari"</h3>
                    <p className="service__card_text">
                      Apple has a very strong brand that is recognized all over the world. Many people trust the company because of its reputation for quality and innovation. The company produces high-quality products that are durable, reliable, and have a modern design. Apple devices are also easy to use, which makes them popular among different age groups.
                    </p>
                  </div>
                  <a href="#contact">
                    
                  </a>
                  <div className="service__card_img_box">
                   
                  </div>
                </div>
              </span>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">Weaknesses "Zaif tomonlari"</h3>
                    <p className="service__card_text">
                     One of the main weaknesses of Apple is its high prices. Many people cannot afford Apple products, especially in developing countries. Another weakness is its closed system. Apple does not allow much customization compared to other platforms, which can be limiting for some users. In addition, the company depends heavily on iPhone sales for a large part of its revenue
                    </p>
                  </div>
                  <a href="#contact">
                   
                  </a>
                  <div className="service__card_img_box">
                    
                  </div>
                </div>
              </span>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">Opportunities "Imkoniyatlar"</h3>
                    <p className="service__card_text">
                      Another opportunity is investing in new technologies such as artificial intelligence, virtual reality, and other innovations. Apple can also expand its services, such as subscriptions and digital platforms, which provide stable income. By focusing on these areas, the company can continue to grow and stay competitive in the global market.
                    </p>
                  </div>
                  <a href="#contact">
                    
                  </a>
                  <div className="service__card_img_box">
                   
                  </div>
                </div>
              </span>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">Threats "Xavflar"</h3>
                    <p className="service__card_text">
                     Apple faces strong competition from other companies like Samsung and Xiaomi. These competitors often offer similar products at lower prices, which can attract more customers. Another threat is the fast-changing technology market. New trends and innovations appear quickly, and Apple must keep up to stay relevant.
                    </p>
                  </div>
                  <a href="#contact">
                    
                  </a>
                  <div className="service__card_img_box">
                    
                  </div>
                </div>
              </span>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
            
            </div>
          </div>
        </div>
      </section>
    );
  }
}
