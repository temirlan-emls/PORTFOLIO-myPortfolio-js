import React from "react";
import SalemBlock from "./components/salemBlock/salemBlock";
import IntroBlock from "./components/introBlock/introBlock";
import FooterBlock from "./components/footerBlock/footerBlock";
import AboutMeBlock from "./components/aboutMeBlock/aboutMeBlock";
import ScrollAnimTop from "./components/scrollAnimTop/scrollAnimTop";
import { Helmet } from "react-helmet";

function App() {
    return (
        <>
            <Helmet>
                <style>{"body { background-color: #0f172a; }"}</style>
            </Helmet>
            <ScrollAnimTop />
            <SalemBlock />
            <IntroBlock />
            <AboutMeBlock />
            <FooterBlock />
        </>
    );
}

export default App;
