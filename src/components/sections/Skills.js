import {Fragment, useMemo} from "react";
import {Icon} from "@iconify/react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const ListItem = ({ item }) => (
  <li className="border-line-h">
    <div className="name">{item.name}</div>
    <div className="progress">
      <div className="percentage" style={{ width: item.percentage }} />
    </div>
  </li>
)

const CircularListItem = ({ item }) => (
    <li>
      <div className="name">{item.name}</div>
      <div className={`progress p${item.percentage}`}>
      <span className="icon-center">
        <Icon icon={item.icon} width={24} height={24} className="text-white/85" />
      </span>
        <div className="slice">
          <div className="bar" />
          <div className="fill" />
        </div>
      </div>
    </li>
);

const NameListItem = ({ item }) => (
  <li>
    <div className="name">{item.name}</div>
  </li>
)


const Sections = Object.freeze({
  TECHNOLOGIES: "technologies",
  DESIGN: "design",
  LANGUAGES: "languages",
  TOOL_STACK: "toolStack",
  KNOWLEDGE: "knowledge"
});

const Skills = () => {
  const skillsSections = [
    {
      type: "technologiesDesign",
      title: "",
      icon: "",
      skills: [],
      subSections: [
        {
          type: Sections.TECHNOLOGIES,
          title: "Technologies",
          icon: "fa fa-code",
          skills: [
            { name: "Javascript / Typescript", percentage: "95%" },
            { name: "React / Vue / Angular", percentage: "95%" },
            { name: "HTML5 / CSS3 / SCSS", percentage: "95%" },
            { name: "Redux / Pinia", percentage: "90%" },
            { name: "Nx Monorepo / Module Federation", percentage: "25%" }
          ],
        },
        {
          type: Sections.DESIGN,
          title: "Design",
          icon: "fa fa-paint-brush",
          skills: [
            { name: "Design Systems (Vivid, Tailwind)", percentage: "95%" },
            { name: "Storybook / Prototyping", percentage: "90%" },
            { name: "UI/UX Collaboration & Handoff", percentage: "95%" },
            { name: "Web & Responsive Design", percentage: "95%" },
            { name: "Figma / Wireframe", percentage: "85%" },
          ],
        },
      ],
    },
    {
      type: Sections.TOOL_STACK,
      title: "Tool Stack",
      icon: "fa fa-cogs",
      skills: [
        { name: "Confluence", percentage: "85", icon: "simple-icons:confluence" },
        { name: "JIRA", percentage: "85", icon: "simple-icons:jirasoftware" },
        { name: "GitHub", percentage: "95", icon: "simple-icons:github" },
        { name: "ChatGPT", percentage: "95", icon: "simple-icons:openai" },
        { name: "Grafana", percentage: "40", icon: "simple-icons:grafana" },
        { name: "Postman", percentage: "80", icon: "simple-icons:postman" },
        { name: "Jenkins", percentage: "70", icon: "simple-icons:jenkins" },
        { name: "Storybook", percentage: "75", icon: "simple-icons:storybook" }
      ],
      subSections: []
    },
    {
      type: "languagesKnowledge",
      title: "",
      icon: "",
      skills: [],
      subSections: [
        {
          type: Sections.LANGUAGES,
          title: "Languages",
          icon: "fa fa-flag",
          skills: [
            { name: "English", percentage: "95%" },
            { name: "German", percentage: "45%" },
          ],
        },
        {
          type: Sections.KNOWLEDGE,
          title: "Knowledge",
          icon: "fa fa-flag",
          skills: [
            { name: "Website hosting" },
            { name: "UI/UX collaboration & accessibility" },
            { name: "Cross-browser & multi-device compatibility" },
            { name: "REST & GraphQL API integration" },
            { name: "Frontend performance optimization" },
            { name: "Git-based version control & code reviews" },
            { name: "Agile delivery using SCRUM, JIRA, Confluence" },
            { name: "Data visualization with D3.js, Chart.js, Grafana" },
            { name: "Tech documentation & stakeholder demos" }
          ],
        },
      ],
    },
  ];

  const getSectionClasses = (currentSection) => {
      switch (currentSection) {
        case Sections.LANGUAGES:
          return 'col-d-4 col-t-4';
        case Sections.KNOWLEDGE:
          return 'col-d-8 col-t-8';
        default:
          return 'col-d-6 col-t-6';
      }
  };

  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">Skills</div>

        {skillsSections.map((section, index) => {
          return (
            <div className="row" key={index}>
              {/* Section with sub-sections start here */}
              {section.subSections.length !== 0 && section.subSections.map((subSection, index) => {
                return (
                  <div key={subSection.type+"_"+index} className={'col col-m-12 border-line-v ' + getSectionClasses(subSection.type)}>
                    <div className={Sections.KNOWLEDGE === subSection.type ? "skills-list list" : "skills-list"}>
                      <div className="skill-title border-line-h">
                        <div className="icon">
                          <i className={subSection.icon} />
                        </div>
                        <div className="name">{subSection.title}</div>
                      </div>
                      <ul>
                        {subSection.skills.map((skill, index) => {
                          return Sections.KNOWLEDGE === subSection.type ? (<NameListItem item={skill} key={index} />) : (<ListItem item={skill} key={index} />)
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })}
              {/* Section with sub-sections ends here */}

            {/* Tool Stack section start here */}
              {section.subSections.length === 0 && (
                <div key={index} className="col col-d-12 col-t-12 col-m-12 border-line-v">
                  <div className="skills-list circles">
                    <div className="skill-title border-line-h">
                      <div className="icon">
                        <i className={section.icon} />
                      </div>
                      <div className="name">{section.title}</div>
                    </div>
                    <ul>
                      {section.skills.map((skill, index) => {
                        return (<CircularListItem item={skill} key={index} />)
                      })}
                    </ul>
                  </div>
                </div>
              )}
            {/* Tool Stack section ends here */}
            </div>
          )
        })}
      </div>
    </Fragment>
  );
};
export default Skills;
