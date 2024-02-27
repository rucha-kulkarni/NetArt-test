import React from "react";
import "./App.css";
import trophy from "./assets/1.png";
import award from "./assets/2.png";
import products from "./assets/3.png";
import logo from "./assets/logo.png";
import { FaPhoneSquareAlt, FaFacebook, FaGlobe } from "react-icons/fa";

function App() {
  return (
    <div className="page">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <main>
        <section className="section">
          <div className="left">
            <img src={trophy} alt="trophy" />
          </div>
          <div className="right">
            <h4>
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <ul>
              <li>
                {" "}
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={award} alt="award" />
            <p>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </section>

        <section className="section2">
          <p className="p1">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img src={products} alt="products" />
          <p className="p2">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
          <hr />
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p className="p3">
            CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER &
            WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA{" "}
            <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP{" "}
            <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING{" "}
            <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL &
            REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING{" "}
            <span>|</span> HVAC <span>|</span> FIRE <span>|</span> FIGHTING{" "}
            <span>|</span> AGRICULTURE & RESIDENTIAL
          </p>
        </section>
      </main>

      <footer>
        <div className="footer-section">
          <FaPhoneSquareAlt />
          <a href="#">
            Toll free <b>1800 200 1234</b>
          </a>
        </div>
        <div className="footer-section">
          <FaFacebook />
          <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
        </div>
        <div className="footer-section">
          <FaGlobe />
          <a href="www.crigroups.com">www.crigroups.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
