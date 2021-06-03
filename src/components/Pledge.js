import { useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import PledgeContainer from '../styles/components/Pledge/PledgeContainer';

const Pledge = () => {
  const [ selection, setSelection ] = useState('');
  const pledgeInfo = useSelector(state => state.data.info[0].modals.default.pledges);

  const handleClickSelection = event => {
    setSelection(event.target.id);
  }

  return (
    <>
    {pledgeInfo.map(pledge => {
      return (
        <PledgeContainer key={nanoid()} htmlFor={pledge.title} border={pledge.title === selection ? true : false}>
          <section className="pledge_body">
            <div className="pledge_header">
              <input
                id={pledge.title}
                type="radio"
                name="pledge"
                disabled={pledge.daysLeft === "0" ? true : false}
                onClick={(event) => handleClickSelection(event)}
              />
              <div className="header_titles">
                <h3
                  className={
                    pledge.daysLeft !== "0"
                      ? "pledge_title"
                      : "pledge_title-disabled"
                  }
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
                >
                  {pledge.daysLeft}
                </span>
                <p
                  className={
                    pledge.daysLeft !== "0"
                      ? "availability_text"
                      : "availability_text-disabled"
                  }
                >
                  left
                </p>
              </div>
            )}
          </section>
          {(pledge.end.length > 0 && pledge.title === selection) && (
            <section className="pledge_footer">
              <h3 className="footer_title-pledge">{pledge.end[0]}</h3>
              <div className="footer_fields">
                <input
                  className="fields_amount-pledge"
                  type="number"
                  placeholder={`$ ${pledge.end[1]}`}
                  required
                />
                <button className="fields_button-pledge" type="button">
                  {pledge.end[2]}
                </button>
              </div>
            </section>
          )}
        </PledgeContainer>
      );
    })}
    </>
  );
}

export default Pledge;