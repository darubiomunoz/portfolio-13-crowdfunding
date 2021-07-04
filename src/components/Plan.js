import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import PlanContainer from '../styles/components/Plan/PlanContainer';

import { openDefault } from '../features/modals/modalSlice';

const Plan = () => {
  const planInfo = useSelector(state => state.data.info[0].about.plans);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(openDefault());
  }

  return (
    <>
      {planInfo.map(plan => {
        return (
          <PlanContainer key={nanoid()}>
            <h2 className={plan.daysLeft !== "0" ? "plan_title" : "plan_title-disabled"}>{plan.title}</h2>
            <h3 className={plan.daysLeft !== "0" ? "plan_subtitle" : "plan_subtitle-disabled"}>{plan.subtitle}</h3>
            <p className={plan.daysLeft !== "0" ? "plan_paragraph" : "plan_paragraph-disabled"}>{plan.description}</p>
            <div className={plan.daysLeft !== "0" ? "plan_counter" : "plan_counter-disabled"}>
              <span className={plan.daysLeft !== "0" ? "counter_number" : "counter_number-disabled"}>{plan.daysLeft}</span>
              <p className={plan.daysLeft !== "0" ? "counter_text" : "counter_text-disabled"}>left</p>
            </div>
            <button className={plan.daysLeft !== "0" ? "plan_button" : "plan_button-disabled"} type="button" onClick={handleClickOpen}>{plan.button}</button>
            {plan.daysLeft === "0" && <div className="screen"></div>}
          </PlanContainer> 
        );
      })}
    </>
  );
}

export default Plan;
