import { ProjectsListing } from './_components/ProjectsListing';

export const metadata = {
    title: "Projects | Portfolio",
    description: "Browse all projects — full-stack apps built with React, Node.js, and modern web technologies.",
};

export default function ProjectsPage() {
    return (
        <main>
            <ProjectsListing />
        </main>
    );
}
