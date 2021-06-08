import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomePageContainer from '../styles/pages/HomePageContainer';

import { fetchData } from '../features/data/dataSlice';

import { breakpointWidth1024 } from '../styles/variables';

import Navbar from '../components/Navbar';
import ProjectDescription from '../components/ProjectDescription';
import ProjectStatistics from '../components/ProjectStatistics';
import About from '../components/About';
import ModalDefault from '../components/ModalDefault';
import ModalSuccess from '../components/ModalSuccess';

const HomePage = () => {
  const dispatch = useDispatch();
  const dataStatus = useSelector(state => state.data.status);
  const defaultState = useSelector(state => state.modals.default);
  const successState = useSelector(state => state.modals.success);

  useEffect(() => {
    if (dataStatus === "idle") dispatch(fetchData());
  }, [dataStatus, dispatch]);

  return (
    <>
      {dataStatus !== "fulfilled" && <h1>loading...</h1>}
      {dataStatus === "fulfilled" && (
        <>
        <HomePageContainer>
          <picture>
            <source
              media={breakpointWidth1024}
              srcSet="https://i.postimg.cc/02yQRXwr/image-hero-desktop.jpg"
            />
            <img
              src="https://i.postimg.cc/85g521RV/image-hero-mobile.jpg"
              alt="Background. Desktop with a desktop computer"
            />
          </picture>
          <Navbar />
          <ProjectDescription />
          <ProjectStatistics />
          <About /> 
        </HomePageContainer>
        {defaultState && <ModalDefault />}
        {successState && <ModalSuccess />}
        </>
      )}
    </>
  );
} 

export default HomePage;