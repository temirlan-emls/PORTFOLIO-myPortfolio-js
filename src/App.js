import React from "react";
import SalemBlock from "./components/salemBlock/salemBlock";
import IntroBlock from "./components/introBlock/introBlock";
import FooterBlock from "./components/footerBlock/footerBlock";
import AboutMeBlock from "./components/aboutMeBlock/aboutMeBlock";
import ScrollAnimTop from "./components/scrollAnimTop/scrollAnimTop";

function App() {
    return (
        <>
            <ScrollAnimTop />
            <SalemBlock />
            <IntroBlock />
            <AboutMeBlock />
            <FooterBlock />
        </>
    );
}

export default App;
