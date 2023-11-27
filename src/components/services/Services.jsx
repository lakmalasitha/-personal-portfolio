import React, { useState } from "react";
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">services</h2>
      <span className="section__subtitle">what i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={()=>toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i className="uil uil-times services__model-close " onClick={()=>toggleTab(0)}></i>
              <h3 className="services__model-title">Product designer</h3>
              <p className="services__model-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i developed user interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">web page development</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i cvreate UX elemet interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i postion your company brand
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    desing and mock product for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={()=>toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i className="uil uil-times services__model-close" onClick={()=>toggleTab(0)}></i>
              <h3 className="services__model-title">UI/UX Designer</h3>
              <p className="services__model-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i developed user interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">web page development</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i cvreate UX elemet interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i postion your company brand
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    desing and mock product for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={()=>toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i className="uil uil-times services__model-close" onClick={()=>toggleTab(0)}></i>
              <h3 className="services__model-title"> Visual Designer</h3>
              <p className="services__model-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i developed user interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">web page development</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i create UX element interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    i position your company brand
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    design and mock product for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
