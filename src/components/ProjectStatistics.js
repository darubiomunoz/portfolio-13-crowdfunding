import { useSelector } from 'react-redux';

import ProjectStatisticsContainer from "../styles/components/ProjectStatistics/ProjectStatisticsContainer";

const ProjectStatistics = () => {
  const projectStatisticsInfo = useSelector(state => state.data.info[0].projectStatistics);

  return (
    <ProjectStatisticsContainer>
      <p className="figure">{projectStatisticsInfo.money.figure}</p>
      <span className="sub-paragraph">{projectStatisticsInfo.money.text}</span>
      <span className="divisor"></span>
      <p className="figure">{projectStatisticsInfo.backers.figure}</p>
      <span className="sub-paragraph">
        {projectStatisticsInfo.backers.text}
      </span>
      <span className="divisor"></span>
      <p className="figure">{projectStatisticsInfo.time.figure}</p>
      <span className="sub-paragraph">
        {projectStatisticsInfo.time.text}
      </span>
      <div className="progress-bar">
        <span></span>
      </div>
    </ProjectStatisticsContainer>
  );
};

export default ProjectStatistics;