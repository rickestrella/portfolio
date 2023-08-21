import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n"; // Import your i18n configuration

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
