import { Fragment } from "react";

const data = [
  {
    icon: "fa fa-coffee",
    title: "Fueled by Coffee",
  },
  {
    icon: "fa fa-laptop",
    title: "20+ Projects Delivered",
  },
  {
    icon: "fa fa-plane",
    title: "Global Explorer",
  },
  {
    icon: "fa fa-users",
    title: "50+ Team Collaborations",
  },
  {
    icon: "fa fa-gamepad",
    title: "Casual Gamer",
  },
  {
    icon: "fa fa-sitemap",
    title: "10+ Micro-Frontends Built",
  },
  {
    icon: "fa fa-code",
    title: "Passionate Coder",
  },
  {
    icon: "fa fa-rocket",
    title: "10+ CI/CD Pipelines Set Up",
  }
]

const FunFact = () => {
  return (
    <Fragment>
      <div className="content fuct">
        {/* title */}
        <div className="title"><span className="first-word">Fun</span> Fact</div>
        {/* content */}
        <div className="row fuct-items">
          {/* fuct item */}

          {data.map((item, index) => (
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="fuct-item">
                  <div className="icon">
                    <span className={item.icon} />
                  </div>
                  <div className="name">{item.title}</div>
                </div>
              </div>
          ))}
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default FunFact;