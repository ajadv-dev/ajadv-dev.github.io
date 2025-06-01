import { Fragment } from "react";

const data = [
  {
    icon: "fa fa-code",
    title: "Software Engineering",
    desc: "Crafting scalable, high-performance web applications using React, Vue, Angular, and modern UI libraries.",
    bulletPoints: [
        'Responsive, component-driven design',
        'Micro-frontend architecture with Nx & Module Federation',
        'Enterprise-grade application development'
       ]
  },
  {
    icon: "fa fa-pencil",
    title: "Design to Prototype Engineering",
    desc: "Bridging design and development with high-fidelity prototypes and pixel-perfect UI/UX.",
    bulletPoints: [
      'Expert in Storybook, design systems, and design handoff',
      'Rapid prototyping in collaboration with UI/UX teams',
      'Vivid Design System, Material UI, Tailwind CSS'
    ]
  },
  {
    icon: "fa fa-check-square-o",
    title: "Testing & Quality Engineering",
    desc: "Ensuring rock-solid quality with modern testing frameworks and automation.",
    bulletPoints: [
      'Unit & integration testing with Vitest, Jest',
      'End-to-end testing with Cypress & Playwright',
      'CI/CD integration for test automation (GitHub Actions, Jenkins)'
    ]
},
  {
    icon: "fa fa-cogs",
    title: "DevOps & CI/CD for Frontend",
    desc: "Accelerating delivery pipelines and maintaining code quality at scale, and smart monitoring with Grafana.",
    bulletPoints: [
      'Custom CI/CD pipelines using YAML, Jenkins, GitHub Actions',
      'Automated deployments to AWS S3 & EC2 and other cloud environments',
      'Monitoring & analytics integration with Grafana and more'
    ]
  },
];

const Services = ({ serviceList }) => {
  const services = serviceList ? serviceList : data;
  return (
    <Fragment>
      <div className="content services">
        {/* title */}
        <div className="title">
          <span className="first-word">What</span> I Do
        </div>
        {/* content */}
        <div className="row service-items border-line-v">
          {/* service item */}
          {services.map((service, i) => (
            <div key={i} className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className={service.icon} />
                </div>
                <div className="name">
                  <span>{service.title}</span>
                </div>
                <div className="desc">
                  <div>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default Services;
