import { Fragment } from "react";
import Contacts from "./Contacts/Contacts";
import HeroSection from "./HeroSection/HeroSection";
import RedSection from "./RedSection/RedSection";
import YellowSection from "./YellowSection/YellowSection";

const Home = props => {
    return (
        <Fragment>
            <HeroSection />
            <RedSection />
            <YellowSection />
            <Contacts />
        </Fragment>
    )
};

export default Home;