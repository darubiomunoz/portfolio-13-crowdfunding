import HomePageContainer from '../styles/pages/HomePageContainer';

import { breakpointWidth1024 } from '../styles/variables';

const HomePage = () => {
  return (
    <HomePageContainer>
      <picture>
        <source
          media={breakpointWidth1024}
          srcSet="https://i.postimg.cc/02yQRXwr/image-hero-desktop.jpg"
        />
        <img
          src="https://i.postimg.cc/85g521RV/image-hero-mobile.jpg"
          alt="Background picture. Desktop with a desktop computer"
        />
      </picture>
    </HomePageContainer>
  );
}

export default HomePage;