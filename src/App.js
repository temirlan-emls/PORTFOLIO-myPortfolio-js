import React from "react";
import SalemBlock from "./components/salemBlock/salemBlock";
import IntroBlock from "./components/introBlock/introBlock";
// import FooterBlock from "./components/footerBlock/footerBlock";
// import AboutMeBlock from "./components/aboutMeBlock/aboutMeBlock";
// import ScrollAnimTop from "./components/scrollAnimTop/scrollAnimTop";
import Cursor from "./components/cursor/cursor";
import ProjectsBlock from "./components/projectsBlock/projectsBlock";
import { Helmet } from "react-helmet";

function App() {
    return (
        <div className="cursor-none h-screen snap-y snap-mandatory overflow-y-scroll">
            {/* <ScrollAnimTop /> */}
            <Helmet>
                <style>{"body { background-color: black; }"}</style>
            </Helmet>
            <Cursor />
            <SalemBlock />
            <IntroBlock />
            <ProjectsBlock />
            {/* <AboutMeBlock />
                <FooterBlock /> */}
        </div>
    );
}

export default App;
