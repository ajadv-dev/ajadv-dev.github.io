import {Fragment, useEffect, useState} from "react";
import { Icon } from '@iconify/react';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const techs = {
    development: [
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "VueJs", icon: "logos:vue" },
        { name: "Angular", icon: "logos:angular-icon" },
        { name: "NextJs", icon: "logos:nextjs-icon" },
        { name: "HTML", icon: "logos:html-5" },
        { name: "CSS", icon: "logos:css-3" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        { name: "Material UI", icon: "logos:material-ui" },
        { name: "Redux", icon: "logos:redux" },
        { name: "Pinia", icon: "logos:pinia" },
        { name: "React Query", icon: "logos:react-query-icon" },
        { name: "Axios", icon: "logos:axios" },
        { name: "GraphQL", icon: "logos:graphql" },
        { name: "Java", icon: "logos:java" },
        { name: "Python", icon: "logos:python" },
        { name: "PHP", icon: "logos:php" },
    ],

    toolsAndArchitecture: [
        { name: "NX", icon: "simple-icons:nx" },
        { name: "Vite", icon: "logos:vitejs" },
        { name: "Webpack", icon: "logos:webpack" },
        { name: "NgInx", icon: "logos:nginx" },
        { name: "Jira", icon: "logos:jira" },
        { name: "Confluence", icon: "logos:confluence" },
        { name: "StoryBook", icon: "logos:storybook-icon" },
        { name: "Figma", icon: "simple-icons:figma" },
        { name: "Webstorm", icon: "logos:webstorm" },
        { name: "VsCode", icon: "logos:visual-studio-code" },
        { name: "MSql", icon: "logos:mysql" },
        { name: "Postgresql", icon: "logos:postgresql" },
        { name: "Github", icon: "simple-icons:github" },
        { name: "Android", icon: "logos:android-icon" },
        { name: "iOS", icon: "simple-icons:apple" },
    ],

    testingAndCI: [
        { name: "Vitest", icon: "logos:vitest" },
        { name: "Jest", icon: "logos:jest" },
        { name: "Cypress", icon: "simple-icons:cypress" },
        { name: "Playwright", icon: "logos:playwright" },
        { name: "Jenkins", icon: "simple-icons:jenkins" },
        { name: "Github Actions", icon: "simple-icons:githubactions" },
        { name: "AWS", icon: "simple-icons:amazonaws" },
        { name: "Grafana", icon: "logos:grafana" },
    ],
};

const Tech = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const baseRadius = isMobile ? 50 : 80;
    const radiusStep = isMobile ? 45 : 60;
    const minSize = 25;
    const maxSize = isMobile ? 30 : 50;

    const getRandom = (min, max) => Math.random() * (max - min) + min;

    const sortedTechLayers = Object.entries(techs)
        .filter(([_, items]) => items.length > 0)
        .sort((a, b) => b[1].length - a[1].length);

    const totalLayers = sortedTechLayers.length;

    return (
        <Fragment>
            <div className="content skills">
                <div className="title">Technology Stack</div>

                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                    {sortedTechLayers.map(([category, items], index) => {
                        const reversedIndex = totalLayers - 1 - index;
                        const radius = baseRadius + reversedIndex * radiusStep;

                        const duration = getRandom(20, 40);
                        const reverse = Math.random() > 0.5;
                        const speed = getRandom(0.5, 2);

                        const iconSize = minSize - (reversedIndex / totalLayers) * (minSize - maxSize);

                        return (
                            <OrbitingCircles
                                key={category}
                                iconSize={iconSize}
                                radius={radius}
                                duration={duration}
                                reverse={reverse}
                                speed={speed}
                            >
                                {items.map(({ name, icon }) => (
                                    <div key={name} title={name}>
                                        <Icon icon={icon} width={getRandom(iconSize * 0.85, iconSize * 1.15)} className="text-white" />
                                    </div>
                                ))}
                            </OrbitingCircles>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Tech;
