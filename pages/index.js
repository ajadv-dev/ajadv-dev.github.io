import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
<strong>Hello! I’m Abhijeet Jadhav</strong>, 
a Full Stack Web Developer and Design Technologist based in Krakow, Poland.
I have a strong background in ReactJS, Angular, and JavaScript, Typescript and have worked across finance and e-learning domains.
Skilled in both front and back-end technologies, I’m always eager to explore new challenges, especially in immersive tech like AR/VR.
<br>Let’s team up to build something great!</br>
</p>`;

const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/avatar-aj.jpg)" }}
          />
          <div className="title">Abhijeet Jadhav</div>
          <TypingAnimation />
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <span className="fa fa-dribbble" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/"
            >
              <span className="fa fa-stack-overflow" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
              <span class="ion ion-ios-cloud-download"></span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
              <span class="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <Pricing />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
