import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import PlanContainer from '../styles/components/Plan/PlanContainer';

const Plan = () => {
  const planInfo = useSelector(state => state.data.info[0].about.plans);
  console.log(planInfo);

  return (
    <>
      {Object.keys(planInfo).map(plan => {
        return (
          <PlanContainer key={nanoid()}>
            <h2 className="plan_title">{plan.title}</h2>
            <h3 className="plan_subtitle">{plan.subtitle}</h3>
            <p className="plan_paragraph">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you'll be added to a
              special Backer member list.
            </p>
            <div className="plan_counter">
              <span className="counter_number">101</span>
              <p className="counter_text">left</p>
            </div>
            <button className="plan_button" type="button">
              Select Reward
            </button>
          </PlanContainer>
        );
      })}
    </>
  );
}

export default Plan;
