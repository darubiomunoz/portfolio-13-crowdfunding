import ProjectStatisticsContainer from "../styles/components/ProjectStatistics/ProjectStatisticsContainer";

const ProjectStatistics = () => {
  return (
    <ProjectStatisticsContainer>
      <p className="figure">$89,914</p>
      <span className="sub-paragraph">of $100,000 backed</span>
      <span className="divisor"></span>
      <p className="figure">5,007</p>
      <span className="sub-paragraph">total backers</span>
      <span className="divisor"></span>
      <p className="figure">56</p>
      <span className="sub-paragraph">days left</span>
      <div className="progress-bar">
        <span></span>
      </div>
    </ProjectStatisticsContainer>
  );
};

export default ProjectStatistics;