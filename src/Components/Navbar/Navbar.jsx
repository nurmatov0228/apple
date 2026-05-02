import React, { Component } from "react";
import "./navbar.scss";
import dezinfeksiya from "../Assets/img/Apple.com.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <section className="navbar_active navbar">
        <div className="container">
          <div className="navbar_flex">
            <a className="navbar__logo__link" href="#home">
              <img
                className="logo__pic"
                src={dezinfeksiya}
                alt="This is the logo"
              />
            </a>
            <div className="navbar__rigth__box">
              <label id="success">
                <input
                  type="checkbox"
                  class="alertCheckbox"
                  autocomplete="off"
                />
                <div class="alert success">
                  <span class="alertClose">X</span>
                  <span class="alertText">
                    Ma'lumotlar jo'natildi
                    <br class="clear" />
                  </span>
                </div>
              </label>
              <label id="error">
                <input
                  type="checkbox"
                  class="alertCheckbox"
                  autocomplete="off"
                />
                <div class="alert error">
                  <span class="alertClose">X</span>
                  <span class="alertText">
                    Jo'natishda xatolik bor
                    <br class="clear" />
                  </span>
                </div>
              </label>
              <div className="null navigations">
                <button className="close_menu">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="close_icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
                <a href="#home" className="navbar__links">
                  Overview
                </a>
                <a href="#about" id="linkitem" className="navbar__links">
                 Business Strategy
                </a>
                <a href="#service" className="navbar__links">
                 Problemsr
                </a>
                <a href="#faq" className="navbar__links">
                  EXTRA TASKS
                </a>
               
              </div>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}
