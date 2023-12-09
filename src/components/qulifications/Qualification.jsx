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
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content Qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor Of Industrial Information Technology</h3>
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
                <h3 className="qualification__title">Diploma in computer science</h3>
                <span className="qualification__subtitle">
                ESOFT Metro Campus
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2015-2016
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ordinary level & Advanced level</h3>
                <span className="qualification__subtitle">
                  Dharmaraja College-Sri Lanka
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2012-2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content Qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer-Intern</h3>
                <span className="qualification__subtitle">
                 Eight25(pvt)Ltd
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020
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
                <h3 className="qualification__title">Associate Software Engineer </h3>
                <span className="qualification__subtitle">
                Eight25(pvt)Ltd
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020-2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                Eight25(pvt)Ltd
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021-2023
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
                <h3 className="qualification__title">freelancer</h3>
                <span className="qualification__subtitle">
                  uva wellassa university
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023-present
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
