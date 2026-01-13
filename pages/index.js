import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/Skills";
import SkillsSection from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import { useContext, useEffect } from "react";
import Context from "../src/context/context";
import Tech from "../src/components/sections/Tech";
import TechStack from "../src/components/TechStack";

const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>A passionate Full Stack Web Developer & Design Technologist based in Krakow, Poland,
bringing over 10 years of experience building scalable, high-performance applications with React, Vue, and Angular.

<br>I specialize in transforming design into code, architecting micro-frontends and microservices,
and crafting enterprise-grade UI systems across diverse domains like Finance, e-Learning, Entertainment, and Communication.</br>

<br>I bridge design and engineering, lead cross-functional teams,
and drive end-to-end excellence—from system architecture to CI/CD and automated testing.</br>

<br>I’m always eager to explore new challenges, especially in immersive tech like AR/VR.</br>

<br>Let’s team up to build seamless, impactful digital experiences!</br>
</p>`;

const resumeSectionData = {
  resumeData: [
    {
      date: 'Aug 2022 - Present',
      name: 'Senior Software Engineer',
      company: 'Vonage (Part of Ericsson)',
      active: true,
      description: 'Built scalable micro-frontends, led UI development, ensured quality, and streamlined CI/CD pipelines.'
    },
      {
      date: 'Feb 2020 - Jul 2022',
      name: 'Senior Design Technologist II',
      company: 'frog designs Inc',
      active: false,
      description: 'Led UI development, built dynamic apps, ensured quality, and supported team through agile collaboration.'
    },
    {
      date: 'Jul 2018 - Feb 2020',
      name: 'Senior Software Engineer',
      company: 'Larsen & Toubro Infotech Ltd (LTI)',
      active: false,
      description: 'Developed Web apps, optimized UX/UI, led FSD creation, and supported agile delivery with team guidance.'
    },
    {
      date: 'Mar 2017 - May 2018',
      name: 'Associate Consultant',
      company: 'Capgemini',
      active: false,
      description: 'Delivered web applications, led a 5-member team, and drove project success through agile leadership.'
    },
    {
      date: 'Nov 2015 - Mar 2017',
      name: 'Software Engineer',
      company: 'Creative Skills',
      active: false,
      description: 'Built responsive UIs using frontend frameworks while mentoring teams and maintaining code quality.'
    },
    {
      date: 'Feb 2014 - Oct 2015',
      name: 'Software Engineer',
      company: 'Austere Technology Solutions',
      active: false,
      description: 'Built responsive UIs using frontend frameworks while mentoring teams and maintaining code quality.'
    }
  ],
  educationData: [
    {
      date: '2012 - 2013',
      name: 'C-DAC',
      place: 'C-DAC, Mumbai',
      active: false,
      description: "Post Graduate Diploma in Computer Application (PG-DAC)"
    },
    {
      date: '2009 - 2012',
      name: 'B.E in E&TC',
      place: 'North Maharashtra University',
      active: false,
      description: "Bachelor's Degree in Electronics & telecommunications"
    },
    {
      date: '2006 - 2009',
      name: 'Diploma in E&TC',
      place: 'Maharashtra State Board of Technical Education, Mumbai',
      active: false,
      description: "Diploma in Electronics & telecommunications"
    }
  ]
}


const IndexDark = () => {
  const { changeNav } = useContext(Context);

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
            style={{ backgroundImage: "url(images/avatar-aj3.jpg)" }}
          />
          <div className="title">Abhijeet Jadhav</div>
          <TypingAnimation />
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ajadv-dev/">
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/ajadv-dev/">
              <span className="fa fa-github" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="pdf/abhijeet-jadhav-cv.pdf" download={'abhijeet-jadhav-cv.pdf'} className="lnk">
              <span className="text">Download CV</span>
              <span class="ion ion-ios-cloud-download"></span>
            </a>
            <a href={`#contacts`} className="lnk discover" onClick={() => changeNav('contacts')}>
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
          <FunFact />
          {/*<Pricing />*/}
          {/*<Clients />*/}
          {/*<Quote />*/}
        </About>
        <TechStack>
          <Tech></Tech>
        </TechStack>
        <Skills>
          <SkillsSection />
        </Skills>
        <Resume>
          <ResumeSection resumeSectionData={resumeSectionData} />
          {/* <Testimonials /> */}
        </Resume>

        {/*//TODO:: add once its ready*/}
        {/*<Work><RecentWorks /></Work>*/}

        <Contact>
          <ContactInfo />
          {/* <ContactForm /> */}
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
