import React, { Fragment } from "react";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import PledgeContainer from "../styles/components/Pledge/PledgeContainer";

import { openSuccess } from "../features/modals/modalSlice";

const Pledge = () => {
  const [selection, setSelection] = useState("");
  const pledgeInfo = useSelector(
    (state) => state.data.info[0].modals.default.pledges
  );
  const dispatch = useDispatch();

  const handleClickSelection = (event) => {
    setSelection(event.target.id);
  };

  const handleClickSupport = () => {
    dispatch(openSuccess());
  };

  return (
    <Fragment>
      {pledgeInfo.map((pledge) => {
        return (
          <PledgeContainer
            key={nanoid()}
            htmlFor={pledge.title}
            border={pledge.title === selection ? true : false}
            disabled={pledge.daysLeft === 0 ? false : true}
          >
            <section
              className={`pledge_body ${
                pledge.daysLeft !== "0"
                  ? ""
                  : "disabled"
              }`}
              disabled={pledge.daysLeft === 0 ? false : true}
            >
              <div className="pledge_header">
                <input
                  id={pledge.title}
                  className="pledge_radiobutton"
                  type="radio"
                  name="pledge"
                  disabled={pledge.daysLeft === "0" ? true : false}
                  onClick={(event) => handleClickSelection(event)}
                  checked={pledge.title === selection ? true : false}
                  readOnly
                  aria-label={pledge.title}
                />
                <div className="header_titles">
                  <h3
                    className={
                      pledge.daysLeft !== "0"
                        ? "pledge_title"
                        : "pledge_title-disabled"
                    }
                    tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
                  >
                    {pledge.title}
                  </h3>
                  {pledge.subtitle && (
                    <h4
                      className={
                        pledge.daysLeft !== "0"
                          ? "pledge_subtitle"
                          : "pledge_subtitle-disabled"
                      }
                      tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
                    >
                      {pledge.subtitle}
                    </h4>
                  )}
                </div>
              </div>
              <p
                className={
                  pledge.daysLeft !== "0"
                    ? "pledge_description"
                    : "pledge_description-disabled"
                }
                tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
              >
                {pledge.description}
              </p>
              {pledge.daysLeft && (
                <div className="pledge_availability">
                  <span
                    className={
                      pledge.daysLeft !== "0"
                        ? "pledge_daysleft"
                        : "pledge_daysleft-disabled"
                    }
                    tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
                  >
                    {pledge.daysLeft}
                  </span>
                  <p
                    className={
                      pledge.daysLeft !== "0"
                        ? "availability_text"
                        : "availability_text-disabled"
                    }
                    tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
                  >
                    left
                  </p>
                </div>
              )}
            </section>
            {pledge.end.length > 0 && pledge.title === selection && (
              <section className="pledge_footer">
                <h3
                  className="footer_title-pledge"
                  tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
                >
                  {pledge.end[0]}
                </h3>
                <div className="footer_fields">
                  <input
                    className="fields_amount-pledge"
                    type="number"
                    placeholder={`$ ${pledge.end[1]}`}
                    min={pledge.end[1]}
                    tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
                    aria-label="Enter the amount of money to donate."
                    required
                  />
                  <button
                    className="fields_button-pledge"
                    type="button"
                    onClick={handleClickSupport}
                    tabIndex={pledge.daysLeft === "0" ? "-1" : "0"}
                  >
                    {pledge.end[2]}
                  </button>
                </div>
              </section>
            )}
          </PledgeContainer>
        );
      })}
    </Fragment>
  );
};

export default Pledge;
