import { Fragment } from "react";
import TypingAnimation from "../TypingAnimation";

const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        <div className="title">
          Hello, I'm <span className="first-word"><TypingAnimation /></span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <section className="text-box">
              <p>A passionate Full Stack Web Developer & Design Technologist based in Krakow, Poland,
                building scalable, high-performance applications with <span className="font-bold">React, Vue, Angular & NodeJs, TypeScript, Java</span>.
              </p><br></br>
            <p>I specialize in transforming design into code, architecting micro-frontends and micro-services,
                and crafting enterprise-grade UI systems across diverse domains like Finance, e-Learning, Entertainment,
              and Communication.</p><br></br>
         <p>I bridge design and engineering, lead cross-functional teams,
              and drive end-to-end excellence—from system architecture to CI/CD and automated testing.</p><br></br>



        {/*<p>I’m always eager to explore new challenges, especially in immersive tech like AR/VR.</p><br></br>*/}
        {/*<p>Let’s team up to build seamless, impactful digital experiences!</p><br></br>*/}

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold color-text">10+</div>
          <div className="text-xs text-gray-400 mt-2">Years of Experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold color-text">20+</div>
          <div className="text-xs text-gray-400 mt-2">Completed Projects</div>
        </div>
        <div>
          <div className="text-3xl font-bold color-text">8+</div>
          <div className="text-xs text-gray-400 mt-2">Domains Served</div>
        </div>
        <div>
          <div className="text-3xl font-bold color-text">15+</div>
          <div className="text-xs text-gray-400 mt-2">Tech Stack Tools</div>
        </div>
      </div>
    </section>
          </div>
          <div className="clear"/>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
