import { Fragment } from "react";

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
      <span>{item.percentage}%</span>{" "}
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
  </li>
)

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
            { name: "Javascript / Typescript", percentage: "90%" },
            { name: "React / Angular / Vue", percentage: "90%" },
            { name: "HTML / CSS", percentage: "90%" },
            { name: "Java", percentage: "65%" },
            { name: "Python", percentage: "20%" },
          ],
        },
        {
          type: Sections.DESIGN,
          title: "Design",
          icon: "fa fa-paint-brush",
          skills: [
            { name: "Web Design", percentage: "90%" },
            { name: "Figma", percentage: "60%" },
            { name: "Photoshop", percentage: "20%" },
            { name: "Graphic Design", percentage: "20%" },
          ],
        },
      ],
    },
    {
      type: Sections.TOOL_STACK,
      title: "Tool Stack",
      icon: "fa fa-cogs",
      skills: [
        { name: "Confluence", percentage: "95", icon: "" },
        { name: "JIRA", percentage: "75", icon: "" },
        { name: "GitHub", percentage: "45", icon: "" },
        { name: "ChatGPT", percentage: "95", icon: "" },
        { name: "Visual Studio", percentage: "95", icon: "" },
        { name: "Postman", percentage: "85", icon: "" },
        { name: "Jenkins", percentage: "85", icon: "" },
        { name: "Atom", percentage: "75", icon: "" },
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
            { name: "Hindi", percentage: "100%" },
          ],
        },
        {
          type: Sections.KNOWLEDGE,
          title: "Knowledge",
          icon: "fa fa-flag",
          skills: [
            { name: "Website hosting" },
            { name: "iOS and android apps" },
            { name: "Create logo design" },
            { name: "Design for print" },
            { name: "Modern and mobile-ready" },
            { name: "Advertising services include" },
            { name: "Graphics and animations" },
            { name: "Search engine marketing" },
          ],
        },
      ],
    },
  ];


  console.log('skillsSections ==>', skillsSections)

  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>

        {skillsSections.map((section, index) => {
          return (
            <div className="row" key={index}>
              {/* Section with sub-sections start here */}
              {section.subSections.length !== 0 && section.subSections.map((subSection, index) => {
                return (
                  <div key={index} className="col col-d-6 col-t-6 col-m-12 border-line-v">
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
