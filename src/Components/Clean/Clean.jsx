import React from "react";
import "./clean.scss";

import img from "../Assets/img/Apple12.jpg";
import icon from "../Assets/img/himoyaicon.png";

export default function Information() {
  return (
    <section className="clean">
      <div className="container">
        <div className="clean__flex">

          {/* LEFT IMAGE */}
          <div className="clean__left" data-aos="fade-right">
            <img src={img} alt="apple" />

            <div className="clean__badge">
              Trusted by millions <br />
              of Apple users worldwide
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="clean__right" data-aos="fade-left">

            <img src={icon} alt="icon" className="clean__icon" />

            <div className="clean__tag">
              RECOMMENDATIONS
            </div>

            <h1 className="clean__title">
              Future Strategy <br />
              for Apple
            </h1>

            <p className="clean__desc">
              If I were the CEO of Apple, I would focus on making products more
              affordable for developing countries. The company should improve its
              pricing strategy to reach a wider audience and increase global access.
            </p>

            <p className="clean__desc">
              Apple should also invest more in environmentally friendly technologies
              and recycling programs. Improving battery life and making devices easier
              to repair would increase customer satisfaction and product longevity.
            </p>

            <p className="clean__desc">
              In addition, expanding educational services and offering more free tools
              for students would strengthen Apple’s ecosystem. Better customer support
              and longer software updates for older devices should also be priorities.
            </p>

            {/* CARDS */}
            <div className="clean__cards">

              <div className="card">
                <h2>🌍</h2>
                <p>Global Access</p>
                <span>More affordable pricing worldwide</span>
              </div>

              <div className="card">
                <h2>♻️</h2>
                <p>Eco Focus</p>
                <span>Sustainable & recyclable products</span>
              </div>

              <div className="card">
                <h2>⚙️</h2>
                <p>Innovation</p>
                <span>Better battery & repairability</span>
              </div>

            </div>

            {/* BUTTONS */}
           

          </div>

        </div>
      </div>
    </section>
  );
}