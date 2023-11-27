import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div  className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className= {toggleState === 1 ? "qualification__content Qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web design</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX expert</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
            </div>
          </div>

          <div className= {toggleState === 2 ? "qualification__content Qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">product desing</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX expert</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
