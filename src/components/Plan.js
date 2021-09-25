import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import PlanContainer from "../styles/components/Plan/PlanContainer";

import { openDefault } from "../features/modals/modalSlice";

const Plan = () => {
  const planInfo = useSelector((state) => state.data.info[0].about.plans);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(openDefault());
  };

  return (
    <Fragment>
      {planInfo.map((plan) => {
        return (
          <PlanContainer key={nanoid()}>
            <div className="plan_titles-container">
              <h2
                className={
                  plan.daysLeft !== "0" ? "plan_title" : "plan_title-disabled"
                }
                tabIndex={plan.daysLeft === "0" ? "-1" : "0"}
              >
                {plan.title}
              </h2>
              <h3
                className={
                  plan.daysLeft !== "0"
                    ? "plan_subtitle"
                    : "plan_subtitle-disabled"
                }
                tabIndex={plan.daysLeft === "0" ? "-1" : "0"}
              >
                {plan.subtitle}
              </h3>
            </div>
            <p
              className={
                plan.daysLeft !== "0"
                  ? "plan_paragraph"
                  : "plan_paragraph-disabled"
              }
              tabIndex={plan.daysLeft === "0" ? "-1" : "0"}
            >
              {plan.description}
            </p>
            <div className="plan_interaction-container">
              <div
                className={
                  plan.daysLeft !== "0"
                    ? "plan_counter"
                    : "plan_counter-disabled"
                }
              >
                <span
                  className={
                    plan.daysLeft !== "0"
                      ? "counter_number"
                      : "counter_number-disabled"
                  }
                  tabIndex={plan.daysLeft === "0" ? "-1" : "0"}
                >
                  {plan.daysLeft}
                </span>
                <p
                  className={
                    plan.daysLeft !== "0"
                      ? "counter_text"
                      : "counter_text-disabled"
                  }
                  tabIndex={plan.daysLeft === "0" ? "-1" : "0"}
                >
                  left
                </p>
              </div>
              <button
                className={
                  plan.daysLeft !== "0" ? "plan_button" : "plan_button-disabled"
                }
                type="button"
                onClick={handleClickOpen}
                tabIndex={plan.daysLeft === "0" ? "-1" : "0"}
              >
                {plan.button}
              </button>
              {plan.daysLeft === "0" && <div className="screen"></div>}
            </div>
          </PlanContainer>
        );
      })}
    </Fragment>
  );
};

export default Plan;
