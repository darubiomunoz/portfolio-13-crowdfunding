import { useSelector } from 'react-redux';

import ProjectStatisticsContainer from "../styles/components/ProjectStatistics/ProjectStatisticsContainer";

const ProjectStatistics = () => {
  const projectStatisticsInfo = useSelector(state => state.data.info[0].projectStatistics);

  return (
    <ProjectStatisticsContainer>
      <p className="statistics_figure">{projectStatisticsInfo.money.figure}</p>
      <span className="statistics_subparagraph">{projectStatisticsInfo.money.text}</span>
      <span className="statistics_divisor"></span>
      <p className="statistics_figure">{projectStatisticsInfo.backers.figure}</p>
      <span className="statistics_subparagraph">
        {projectStatisticsInfo.backers.text}
      </span>
      <span className="statistics_divisor"></span>
      <p className="statistics_figure">{projectStatisticsInfo.time.figure}</p>
      <span className="statistics_subparagraph">
        {projectStatisticsInfo.time.text}
      </span>
      <div className="statistics_progressbar">
        <span className="statistics_progress"></span>
      </div>
    </ProjectStatisticsContainer>
  );
};

export default ProjectStatistics;