import PlanContainer from '../styles/components/Plan/PlanContainer';

const Plan = () => {
  return (
    <PlanContainer>
      <h2 className="plan_title">Bamboo Stand</h2>
      <h3 className="plan_subtitle">Pledge $25 or more</h3>
      <p className="plan_paragraph">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
      <div className="plan_counter">
        <span className="counter_number">101</span>
        <p className="counter_text">left</p>
      </div>
      <button className="plan_button" type="button">Select Reward</button>
    </PlanContainer>
  );
}

export default Plan;