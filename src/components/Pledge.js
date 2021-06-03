import { useSelector } from 'react-redux';

import PledgeContainer from '../styles/components/Pledge/PledgeContainer';

const Pledge = () => {
  const pledgeInfo = useSelector(state => state.data.info[0].modals.default.pledges);

  return (
    <>
    {pledgeInfo.map(pledge => {
      return (
        <PledgeContainer htmlFor={pledge.title}>
          <div className="pledge_header">
            <input id={pledge.title} type="radio" name="pledge" disabled={pledge.daysLeft === "0" ? true : false}/>
            <div className="header_titles">
              <h3 className={pledge.daysLeft !== "0" ? "pledge_title" : "pledge_title-disabled"}>{pledge.title}</h3>
              {pledge.subtitle && (
                <h4 className={pledge.daysLeft !== "0" ?"pledge_subtitle" : "pledge_subtitle-disabled"}>{pledge.subtitle}</h4>
              )}
            </div>
          </div>
          <p className={pledge.daysLeft !== "0" ? "pledge_description" : "pledge_description-disabled"}>{pledge.description}</p>
          {pledge.daysLeft && (
            <div className="pledge_availability">
              <span className={pledge.daysLeft !== "0" ? "pledge_daysleft" : "pledge_daysleft-disabled"}>{pledge.daysLeft}</span>
              <p className={pledge.daysLeft !== "0" ? "availability_text" : "availability_text-disabled"}>left</p>
            </div>
          )}
        </PledgeContainer>
      );
    })}
    </>
  );
}

export default Pledge;