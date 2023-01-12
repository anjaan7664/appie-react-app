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
import ProjectHomeOne from '../HomeOne/ProjectHomeOne';
import HeroHomeSix from './HeroHomeSix';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <WorkPartHomeEight />
            <CounterArea />
            <TrafficHomeOne />
            <ServicesHomeOne />
            <FeaturesHomeOne />
            <FaqHomeOne />
            <HeroHomeSix />
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
