import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import PlanContainer from '../styles/components/Plan/PlanContainer';

const Plan = () => {
  const planInfo = useSelector(state => state.data.info[0].about.plans);
  console.log(planInfo);

  return (
    <>
      {planInfo.map(plan => {
        return (
          <PlanContainer key={nanoid()}>
            <h2 className="plan_title">{plan.title}</h2>
            <h3 className="plan_subtitle">{plan.subtitle}</h3>
            <p className="plan_paragraph">{plan.description}</p>
            <div className="plan_counter">
              <span className="counter_number">{plan.daysLeft}</span>
              <p className="counter_text">left</p>
            </div>
            <button className="plan_button" type="button">{plan.button}</button>
          </PlanContainer>
        );
      })}
    </>
  );
}

export default Plan;
