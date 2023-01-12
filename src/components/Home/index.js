import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import FaqHomeOne from './FaqHomeOne';
import FeaturesHomeOne from './FeaturesHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HeroHomeOne from './HeroHomeOne';
import HomeOneHeader from './HomeOneHeader';
import ServicesHomeOne from './ServicesHomeOne';
import TrafficHomeOne from './TrafficHomeOne';
import WorkPartHomeEight from './WorkPartHomeEight';
import CounterArea from './CounterArea';
import SignupHomeEight from './SignupHomeEight';
import TestimonialHomeEight from './TestimonialHomeEight';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <WorkPartHomeEight />
            <CounterArea />

            <ServicesHomeOne />
            <FeaturesHomeOne />
            <TrafficHomeOne />
            <FaqHomeOne />
            <SignupHomeEight className="appie-signup-8-area" />
            <TestimonialHomeEight />

            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
