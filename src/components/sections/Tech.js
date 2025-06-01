import { Fragment } from "react";
import { Icon } from '@iconify/react';
import {OrbitingCircles} from "@/components/magicui/orbiting-circles";

const techs = {
    frontend : [
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "VueJs", icon: "logos:vue" },
        { name: "Angular", icon: "logos:angular-icon" },
    ],
    styles: [
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        { name: "Material UI", icon: "logos:material-ui" },
        { name: "CSS", icon: "logos:css-3" },
        { name: "HTML", icon: "logos:html-5" },
    ],
    designToPrototype: [
        { name: "StoryBook", icon: "logos:storybook-icon" },
        { name: "Figma", icon: "logos:figma" },
    ],
    middleware: [
        { name: "Pinia", icon: "logos:pinia" },
        { name: "Redux", icon: "logos:redux" },
        { name: "NgInx", icon: "logos:nginx" },
        { name: "Axios", icon: "logos:axios" },
        { name: "React Query", icon: "logos:react-query-icon" },
        { name: "GraphQL", icon: "logos:graphql" },
    ],
    archBuild: [
        { name: "NX", icon: "logos:nx" },
        { name: "Vite", icon: "logos:vitejs" },
        { name: "Webpack", icon: "logos:webpack" },
        { name: "Jira", icon: "logos:jira" },
        { name: "Confluence", icon: "logos:confluence" },
    ],
    testing: [
        { name: "Vitest", icon: "logos:vitest" },
        { name: "Jest", icon: "logos:jest" },
        { name: "Cypress", icon: "logos:cypress-icon" },
        { name: "Playwright", icon: "logos:playwright" },
    ],
    CICD: [
        { name: "Jenkins", icon: "logos:jenkins-icon" },
        { name: "Github Actions", icon: "logos:github-actions" },
        { name: "Aws", icon: "logos:aws" },
        { name: "Grafana", icon: "logos:grafana" },
    ],
    others: [
        { name: "Webstorm", icon: "logos:webstorm" },
        { name: "VsCode", icon: "logos:visual-studio-code" },
        { name: "MSql", icon: "logos:mysql" },
        { name: "Postgresql", icon: "logos:postgresql" },
        { name: "Github", icon: "logos:github-octocat" },
        { name: "Android", icon: "logos:android-icon" },
        { name: "ios", icon: "logos:ios" },
    ],
    backend : [
        { name: "Java", icon: "logos:java" },
        { name: "Python", icon: "logos:python" },
        { name: "PHP", icon: "logos:php" }
    ],
};

const Tech = () => {
    const baseRadius = 20;
    const radiusStep = 28;

    const getRandom = (min, max) => Math.random() * (max - min) + min;

    // Sort tech layers by item count (descending)
    const sortedTechLayers = Object.entries(techs)
        .filter(([_, items]) => items.length > 0)
        .sort((a, b) => b[1].length - a[1].length); // largest first

    const totalLayers = sortedTechLayers.length;

    return (
        <Fragment>
            <div className="content skills">
                <div className="title">Technology Stack</div>

                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                    {sortedTechLayers.map(([category, items], index) => {
                        // Reverse the index so the largest group goes outermost
                        const reversedIndex = totalLayers - 1 - index;
                        const radius = baseRadius + reversedIndex * radiusStep;

                        const duration = getRandom(20, 40);
                        const reverse = Math.random() > 0.5;
                        const speed = getRandom(0.5, 2);

                        const minSize = 50;
                        const maxSize = 20;
                        const iconSize = maxSize - (reversedIndex / totalLayers) * (maxSize - minSize);

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
                                        <Icon icon={icon} width={getRandom(iconSize * 0.85, iconSize * 1.15)} />
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
