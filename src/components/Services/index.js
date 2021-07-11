import React from 'react';
import Icon1 from '../../images/svg1.svg';
import Icon2 from '../../images/svg2.svg';
import Icon3 from '../../images/svg3.svg';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Efficient</ServicesH2>
            <ServicesP>We Help you to code along with us.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Fast</ServicesH2>
            <ServicesP>We Help you to code fast with us.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Worth</ServicesH2>
            <ServicesP>Being worth as Web Developer.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
