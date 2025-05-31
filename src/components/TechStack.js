import ActiveSection from "../activeSection";

const TechStack = ({ children, animationIn, animationOut }) => {
    return (
        <div
            className={ActiveSection("tech", animationIn, animationOut)}
            id="tech"
        >
            <div className="card-wrap">{children}</div>
        </div>
    );
};
export default TechStack;
