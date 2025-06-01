import { Fragment } from "react";
import TypingAnimation from "../TypingAnimation";


const PortfolioIntro = () => {
  return (
      <section className="bg-black text-white px-6 py-12 md:py-20 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Hello, I’m <span className="text-yellow-400 font-bold">Abhijeet Jadhav</span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
          Frontend Developer & Design Technologist
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
          Based in Krakow, Poland
        </h3>

        <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
          With <span className="text-yellow-400 font-medium">10+ years</span> of experience building scalable web apps, modular frontends,
          and enterprise UI systems using{" "}
          <span className="text-yellow-400">React, Angular, Vue & TypeScript</span>. I specialize in{" "}
          <span className="text-yellow-400">design-to-code prototyping</span>,{" "}
          <span className="text-yellow-400">micro-frontend architecture</span>, and leading cross-functional teams
          to deliver intuitive, high-impact digital experiences.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400">10+</div>
            <div className="text-sm text-gray-400 mt-2">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">100+</div>
            <div className="text-sm text-gray-400 mt-2">Completed Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">12+</div>
            <div className="text-sm text-gray-400 mt-2">Domains Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">20+</div>
            <div className="text-sm text-gray-400 mt-2">Tech Stack Tools</div>
          </div>
        </div>
      </section>
  );
};



const bio_ = ` <p>
<!--<br>A passionate Full Stack Web Developer & Design Technologist based in Krakow, Poland,-->
<!--bringing over 10 years of experience building scalable, high-performance applications with React, Vue, and Angular.</br>-->

<!--<br>I specialize in transforming design into code, architecting micro-frontends,-->
<!--and crafting enterprise-grade UI systems across diverse domains like Finance, e-Learning, Entertainment, and Communication.</br>-->

<!--<br>I bridge design and engineering, lead cross-functional teams,-->
<!--and drive end-to-end excellence—from system architecture to CI/CD and automated testing.</br>-->

<!--<br>I’m always eager to explore new challenges, especially in immersive tech like AR/VR.</br>-->

<!--<br>Let’s team up to build seamless, impactful digital experiences!</br>-->

<p>
Full Stack Web Developer & Design Technologist based in Krakow, with 10+ years of experience delivering scalable, high-performance apps using React, Vue, and Angular.
</p>
<p>
I turn designs into code, build micro-frontends, and architect enterprise UI systems across Finance, e-Learning, and more.
</p>
<p>
From design to deployment, I lead teams, shape frontend architecture, and ensure CI/CD and testing excellence.
</p>
<p>
Passionate about AR/VR and future-forward tech—let’s build impactful digital experiences together!
</p>

</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          Hello, I'm <span className="first-word"><TypingAnimation /></span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="">
              <p>
                Full Stack Web Developer & Design Technologist based in Krakow, with <span className="first-word">10+ years</span> of experience delivering scalable, high-performance apps using React, Vue, and Angular.
              </p><br></br>
              <p>
                I turn designs into code, build micro-frontends, and architect enterprise UI systems across Finance, e-Learning, and more.
              </p><br></br>
              <p>
                From design to deployment, I lead teams, shape frontend architecture, and ensure CI/CD and testing excellence.
              </p><br></br>
              <p>
                Passionate about AR/VR and future-forward tech—let’s build impactful digital experiences together!
              </p><br></br>
            </div>
          </div>

          <PortfolioIntro></PortfolioIntro>

          <div className="clear"/>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
