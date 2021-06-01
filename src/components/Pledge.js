import { useSelector } from 'react-redux';

import PledgeContainer from '../styles/components/Pledge/PledgeContainer';

const Pledge = () => {
  const pledgeInfo = useSelector(state => state.data.info[0].modals.default.pledges);

  return (
    <>
    {pledgeInfo.map(pledge => {
      return (
        <PledgeContainer htmlFor="">
          <div className="pledge_header">
            <input id="" type="radio" />
            <h3 className="pledge_title">{pledge.title}</h3>
            {pledge.subtitle && <h4>{pledge.subtitle}</h4>}
          </div>
          <p className="pledge_description">{pledge.description}</p>
          {pledge.daysLeft && (
            <div className="pledge_availability">
              <span>{pledge.daysLeft}</span>
              <p>left</p>
            </div>
          )}
        </PledgeContainer>
      );
    })}
    </>
  );
}

export default Pledge;