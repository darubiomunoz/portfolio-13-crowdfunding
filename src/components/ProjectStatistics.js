import React from "react";

import { useSelector } from "react-redux";

import ProjectStatisticsContainer from "../styles/components/ProjectStatistics/ProjectStatisticsContainer";

const ProjectStatistics = () => {
  const projectStatisticsInfo = useSelector(
    (state) => state.data.info[0].projectStatistics
  );

  return (
    <ProjectStatisticsContainer id="Discover">
      <div className="statistics_container">
        <div className="statistics_info-container">
          <p className="statistics_figure" tabIndex="0">
            {projectStatisticsInfo.money.figure}
          </p>
          <span className="statistics_subparagraph" tabIndex="0">
            {projectStatisticsInfo.money.text}
          </span>
        </div>
        <span className="statistics_divisor"></span>
        <div className="statistics_info-container">
          <p className="statistics_figure" tabIndex="0">
            {projectStatisticsInfo.backers.figure}
          </p>
          <span className="statistics_subparagraph" tabIndex="0">
            {projectStatisticsInfo.backers.text}
          </span>
        </div>
        <span className="statistics_divisor"></span>
        <div className="statistics_info-container">
          <p className="statistics_figure" tabIndex="0">
            {projectStatisticsInfo.time.figure}
          </p>
          <span className="statistics_subparagraph" tabIndex="0">
            {projectStatisticsInfo.time.text}
          </span>
        </div>
      </div>
      <div className="statistics_progressbar">
        <span className="statistics_progress"></span>
      </div>
    </ProjectStatisticsContainer>
  );
};

export default ProjectStatistics;
